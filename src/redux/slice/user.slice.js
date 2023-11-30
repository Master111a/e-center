import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: null,
  userList: null,
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const {
        _id = "",
        email,
        role = 0,
        name = "",
        phone = "",
        address = "",
        date = "",
        gender = "",
        avatar = "",
        coverImage = "",
        intro = "",
        createdAt = "",
        access_token,
        refresh_token = "",
      } = action.payload;
      state.user = {
        id: _id,
        email: email,
        role: role,
        name: name || email,
        phone: phone,
        date: date,
        gender: gender,
        address: address,
        avatar: avatar,
        intro: intro,
        coverImage: coverImage,
        createdAt: createdAt,
        access_token: access_token,
        refresh_token: refresh_token,
      };
    },
    updateUser: (state, action) => {
      state.user = {
        ...state.user,
        name: action.payload.name,
        phone: action.payload.phone,
        role: action.payload.role,
        date: action.payload.date,
        gender: action.payload.gender,
        address: action.payload.address,
        intro: action.payload.intro,
        avatar: action.payload.avatar,
        coverImage: action.payload.coverImage,
      };
    },
    resetUser: (state) => {
      state.user = null;
    },
    setUserList: (state, action) => {
      state.userList = action.payload;
    },
    addToUserList: (state, action) => {
      state.userList?.push(action.payload);
    },
    updateUserList: (state, action) => {
      const userEdit = action.payload;
      state.userList?.find((user, index) => {
        if (user._id === userEdit._id) {
          state.userList[index] = userEdit;
          return true;
        }
        return false;
      });
    },
    deletedUserSlice: (state, action) => {
      const delId = action.payload;
      const userDel = state.userList.findIndex((user) => user._id === delId);
      if (userDel !== -1) {
        state.userList?.splice(userDel, 1);
      }
    },
  },
});

export const {
  setUser,
  updateUser,
  resetUser,
  setUserList,
  addToUserList,
  updateUserList,
  deletedUserSlice,
} = userSlice.actions;
export default userSlice.reducer;
