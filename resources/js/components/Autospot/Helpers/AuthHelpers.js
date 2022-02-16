export const setLocalStorage = (
    uid,
    displayName,
    mail,
    photoURL,
    role_id = 2,
    id = null
) => {
    window.localStorage.setItem(
        "autospot",
        JSON.stringify({
            user: {
                id: id,
                uid: uid,
                displayName: displayName,
                email: mail,
                photo_url: photoURL,
                role_id: role_id,
            },
        })
    );
};
