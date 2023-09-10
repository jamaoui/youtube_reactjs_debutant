import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import {resetUser, updateUser} from "./features/userSlice";
import {userSelectors} from "./store/userSelectors";

export default function UserForm() {
    const name = useRef(null)
    const country = useRef(null)
    const age = useRef(null)
    const user = useSelector(userSelectors)
    const dispatch = useDispatch()
    const handleSubmit = () => {
        dispatch(updateUser({
            name: name.current.value,
            country: country.current.value,
            age: age.current.value,
        }))
    }
    const resetUserCallback = (e) => {
        dispatch(resetUser())
    }

    return <>
        <div className="container">
            <div className="d-grid gap-2 d-flex justify-content-center mb-5">
                <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3" data-bs-toggle="modal"
                        data-bs-target="#exampleModal">Update your profile
                </button>
                <button type="button" className="btn btn-outline-danger btn-lg px-4" onClick={resetUserCallback}>Delete
                    Your profile
                </button>
            </div>
        </div>


        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
             aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Update user</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3 row">
                                <label htmlFor="fullName" className="col-sm-2 col-form-label">Name</label>
                                <div className="col-sm-10">
                                    <input type="text" className="form-control" id="fullName" name="fullName"
                                           defaultValue={user?.name} ref={name}/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="age" className="col-sm-2 col-form-label">Age</label>
                                <div className="col-sm-10">
                                    <input type="number" className="form-control" id="age" name="age"
                                           defaultValue={user?.age} ref={age}/>
                                </div>
                            </div>
                            <div className="mb-3 row">
                                <label htmlFor="country" className="col-sm-2 col-form-label">Country</label>
                                <div className="col-sm-10">
                                    <select id='country' name='country' className="form-select" ref={country}
                                            defaultValue={user?.country}>
                                        <option value=''>Select your country</option>
                                        <option value="ma">Morocco</option>
                                        <option value="dz">Algeria</option>
                                        <option value="tn">Tunisia</option>
                                    </select>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" onClick={handleSubmit}
                                data-bs-dismiss="modal">Update user
                        </button>
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>

    </>
}