//Default to an empty object
export const selectFields = ({id, title, by, url, time} = {}) => {
    return (
        {
            id,
            by,
            url,
            time,
            title
        }
    )
}