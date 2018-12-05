
export const createRoom = room => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const authorId = getState().firebase.auth.uid;
    const roomname = room.title;
    const roomname2 = roomname.toLowerCase();
    
    firestore
      .collection("rooms")
      .doc(roomname2)
      .set({
        ...room,
        authorId: authorId,
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: "CREATE_ROOM", room });
      })
      .catch(err => {
        dispatch({ type: "CREATE_ROOM_EROOR", err });
      });
  };
};

export const createPassword = password => {
  return async (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const spot = password.spotid;
 //   const pw = password.password;
      try {
       await firestore.collection("matches").doc(spot).set({
          ...password,
          createdAt: new Date()
        });
        console.log('creato');
        const code = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 15);
        let token = await firestore.collection('tokens').doc(code).set({
          spot: spot,
          createdAt: new Date()
        });
        console.log(code);
      } catch (error) {

      }
  };
};

// export const createPassword = password => {
//   return (dispatch, getState, { getFirebase, getFirestore }) => {
//     const firestore = getFirestore();
//     //  const authorId = getState().firebase.auth.uid;
//     const spot = password.spotid;
//     const pw = password.password;
//     firestore
//       .collection("matches")
//       .doc(spot)
//       .set({
//         ...password,
//         createdAt: new Date()
//       })
//       .then(() => {
//         dispatch({ type: "CREATE_ROOM", spot });
//       })
//       .catch(err => {
//         dispatch({ type: "CREATE_ROOM_EROOR", err });
//       });
//   };
// };


export const createChat = chat => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const ida = chat.roomid;
    const authorId = getState().firebase.auth.uid;
    firestore
      .collection("rooms")
      .doc(ida)
      .collection("chats")
      .add({
        message: chat.message,
        createdAt: new Date(),
        authorId: authorId
      })
      .then(() => {
        dispatch({ type: "CREATE_CHAT", chat });
      })
      .catch(err => {
        dispatch({ type: "CREATE_CHAT_EROOR", err });
      });
  };
};

export const deleteChat = chat => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    const ida = chat.roomid;
    const eva = chat.chatid;
    firestore
      .collection("rooms")
      .doc(ida)
      .collection("chats")
      .doc(eva)
      .delete()
      .then(() => {
        dispatch({ type: "CREATE_CHAT", chat });
      })
      .catch(err => {
        dispatch({ type: "CREATE_CHAT_EROOR", err });
      });
  };
};

export const deleteRoom = rid => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const firestore = getFirestore();
    firestore
      .collection("rooms")
      .doc(rid)
      .delete()
      .then(() => {
        dispatch({ type: "CREATE_CHAT", rid });
      })
      .catch(err => {
        dispatch({ type: "CREATE_CHAT_EROOR", err });
      });
  };
};
