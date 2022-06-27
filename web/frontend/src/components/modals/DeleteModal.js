import React from "react";
import {http} from "../../helper/http";
import {loadData} from "../../slice/JobListSlice";
import {useDispatch} from "react-redux";

export default function DeleteModal({id: id, path: path}) {
    const dispatch = useDispatch();

    function destroy() {
        http.delete(path + id).then((res) => console.log(res))
    }

    return (
        <div className="modal !items-baseline" id="deleteModal">
            <div className="w-6/12 !bg-none mt-3">
                <div className="alert shadow-lg">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                             className="stroke-info flex-shrink-0 w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                        <span>Silmek istediğinize eminmisiniz ?</span>
                    </div>
                    <div className="flex-none">
                        <a href="#" className="btn btn-sm btn-ghost">İptal</a>
                        <a href="#" onClick={destroy} className="btn btn-sm btn-primary">Tamam</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
