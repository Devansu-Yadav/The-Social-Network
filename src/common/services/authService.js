import { createAsyncThunk } from "@reduxjs/toolkit";
import { auth, db } from "firebase-config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDateStringFromSeconds } from "common/helpers";
import { toast } from "react-toastify";
import { collection, getDoc, getDocs, doc, setDoc, updateDoc, serverTimestamp } from "firebase/firestore";

const createUser = async ({ uid, firstName, lastName, email }) => {
    try {
        await setDoc(doc(db, "users", uid), {
            id: uid,
            firstName: firstName,
            lastName: lastName,
            userName: firstName + lastName,
            email: email,
            bio: "404 Not Found",
            followers: [],
            following: [],
            bookmarks: [],
            website: "",
            avatar: "",
            coverImg: "",
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp()
        });
    } catch(error) {
        console.log(error);
        toast.error("Couldn't create user");
    }
};

const updateUser = async (id, updatedUserData, dispatch, navigate) => {
    try {
        const userDoc = doc(db, "users", id);
        const updatedUser = await updateDoc(userDoc, { ...updatedUserData, updatedAt: serverTimestamp() });
        
        dispatch(getUserData(id));
        dispatch(getAllUsers());
        toast.success("Profile updated!");
        navigate("/profile");
        return updatedUser;
    } catch(error) {
        console.log(error);
        toast.error("Couldn't update user");
    }
};

const getUserData = createAsyncThunk("auth/getUserData", async (id) => {
    try {
        const userDoc = doc(db, "users", id);
        const userDataSnap = await getDoc(userDoc);

        if(userDataSnap.exists()) {
            const data = userDataSnap.data();
            return { ...data, createdAt: getDateStringFromSeconds(data.createdAt.seconds), updatedAt: getDateStringFromSeconds(data.updatedAt.seconds) };
        }
    } catch(error) {
        console.log(error.response.data);
        toast.error("Could not fetch user data!");
    }
});

const getAllUsers = createAsyncThunk("auth/getAllUsers", async () => {
    const usersCollectionRef = collection(db, "users");

    try {
        const usersSnapshot = await getDocs(usersCollectionRef);
        const allUsersData = usersSnapshot.docs.map((doc) => doc.data());
        return allUsersData;
    } catch(error) {
        console.log(error);
        toast.error("Could not fetch all users data!");
    }
});

const signupUser = createAsyncThunk("auth/signupUser", async ({ firstName, lastName, email, password }, { dispatch }) => {
    try {
        if(firstName && lastName && email && password) {
            const createUserResponse = await createUserWithEmailAndPassword(auth, email, password);
            const { uid } = createUserResponse.user;
            
            localStorage.setItem("authToken", uid);
            createUser({ uid, firstName: firstName, lastName: lastName, email: email });

            dispatch(getUserData(uid));
            toast.success("User signed in successfully!");
            console.log("User Signed up..");
        } else {
            toast.error("Please fill all details to signup");
        }
    } catch(error) {
        console.log("Error in Signup..");
        const errorCode = error.code;
        switch(errorCode) {
            case "auth/weak-password":
                return toast.error("The password must be 8 characters long or more.");
            case "auth/email-already-in-use":
                return toast.error("This email is already in use.");
            default:
                console.log(error);
                return toast.error("Something went wrong! Try again later.");
        }
    }
});

const loginUser = createAsyncThunk("auth/loginUser", async ({ email, password }, { dispatch }) => {
    try {
        if(email && password) {
            const loginResponse = await signInWithEmailAndPassword(auth, email, password);
            const { uid } = loginResponse.user;

            localStorage.setItem("authToken", uid);
            dispatch(getUserData(uid));
            toast.success("User logged in successfully!");
            console.log("User logged in..");
        } else {
            toast.error("Please fill all details to login");
        }
    } catch(error) {
        console.log("Error in login...");
        const errorCode = error.code;
        switch(errorCode) {
            case "auth/wrong-password":
                return toast.error("Incorrect password! Check your password again.");
            case "auth/invalid-email":
                return toast.error("Invalid email!");
            case "auth/user-not-found":
                return toast.error("You need to sign up first!");
            default:
                console.log(error);
                return toast.error("Something went wrong! Try again later.");
        }
    }
});

export { createUser, updateUser, getUserData, getAllUsers, signupUser, loginUser };