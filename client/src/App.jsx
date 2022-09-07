import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AddNewCategory from "./components/Categories/AddNewCategory";
import HomePage from "./components/HomePage/HomePage";
import Navbar from "./components/Navigation/Navbar";
import Login from "./components/Users/Login/Login";
import Register from "./components/Users/Register/Register";
import CategoryList from "./components/Categories/CategoryList";
import UpdateCategory from "./components/Categories/UpdateCategory";
import PrivateProtectRoute from './components/Navigation/ProtectedRoutes/PrivateProtectRoute';
import CreatePost from './components/Posts/CreatePost';
import PostsList from "./components/Posts/PostsList";
import PostDetails from "./components/Posts/PostDetails";
import UpdatePost from "./components/Posts/UpdatePost";
import UpdateComment from "./components/Comments/UpdateComment";
import Profile from "./components/Users/Profile/Profile";
import UploadProfilePhoto from "./components/Users/Profile/UploadProfilePhoto";
import UpdateProfileForm from "./components/Users/Profile/UpdateProfileForm";
import SendEmail from "./components/Users/Emailing/SendEmail";
import AccountVerified from "./components/Users/AccountVerification/AccountVerified";
import UsersList from "./components/Users/UsersList/UsersList";
import UpdatePassword from "./components/Users/PasswordManagement/UpdatePassword";
import ResetPasswordForm from "./components/Users/PasswordManagement/ResetPasswordForm";
import ResetPassword from "./components/Users/PasswordManagement/ResetPassword";

function App()
{
    return (
        <>
            <Navbar />
            <Routes>

                <Route element={<PrivateProtectRoute />}>
                    <Route path='/create-post' element={<CreatePost />} />
                    <Route path='/posts' element={<PostsList />} />
                    <Route path='/posts/:id' element={<PostDetails />} />
                    <Route path='/update-post/:id' element={<UpdatePost />} />
                    <Route path='/update-comment/:id' element={<UpdateComment />} />
                    <Route path='/profile/:id' element={<Profile />} />
                    <Route path='/upload-profile-photo' element={<UploadProfilePhoto />} />
                    <Route path='/update-password' element={<UpdatePassword />} />
                    <Route path='/update-profile/:id' element={<UpdateProfileForm />} />
                    <Route path='/send-mail' element={<SendEmail />} />
                    <Route path='/verify-account/:token' element={<AccountVerified />} />
                    <Route path='/users' element={<UsersList />} />
                    {/* <Route element={<AdminRoute />}>
                    </Route> */}


                </Route>
                <Route path='/reset-password/:token' element={<ResetPassword />} />
                <Route path='/password-reset-token' element={<ResetPasswordForm />} />
                <Route path='/add-category' element={<AddNewCategory />} />
                <Route path='/update-category/:id' element={<UpdateCategory />} />
                <Route path='/category-list' exact element={<CategoryList />} />
                <Route path='/register' exact element={<Register />} />
                <Route path='/login' exact element={<Login />} />
                <Route path='/' exact element={<HomePage />} />
            </Routes>
        </>
    )
}

export default App