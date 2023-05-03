export const PageTitle = ({title}) => {
    return (
        // fix padding issue on pages because of navbar
        <>
        <div className=" d-flex justify-content-center w-100 top-container page-title">
            <h1>{title}</h1>
        </div>
        </>
    )
}