export const COMMENT_FRAGMENT = `
    id
    text
    user{
        userName
}`;

export const USER_FRAGMENT = `
    id
    userName
`;

export const FILE_FRAGMENT = `
    id
    url
`

export const FULL_POST_FRAGMENT = `
    fragment PostParts on Post{
        id
        location
        caption
        createdAt
        updatedAt
        files{
            ${FILE_FRAGMENT}
        }
        comments{
            ${COMMENT_FRAGMENT}
        }
        user {
            ${USER_FRAGMENT}   
        }
    }
`