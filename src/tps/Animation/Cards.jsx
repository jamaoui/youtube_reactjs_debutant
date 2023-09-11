export default function Cards({children}) {
    return (
        <>
            <div id='cards' className="d-flex w-100 h-100 justify-content-center">
                {children}
            </div>
        </>
    );
}
