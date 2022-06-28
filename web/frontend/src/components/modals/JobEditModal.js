import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import { currentJobAction, allJobAction } from "../../slice/JobListSlice";
import { http } from "../../helper/http";

export default function JobEditModal() {
  const cities = useSelector((state) => state.genericValue.cities);
  const categories = useSelector((state) => state.genericValue.categories);
  const currentJob = useSelector((state) => state.jobList.currentJob);
  const jobList = useSelector((state) => state.jobList.job);

  const { handleSubmit, register, reset } = useForm();
  const dispatch = useDispatch();

  const genders = [
    {
      key: "male",
      value: "Erkek",
    },
    {
      key: "female",
      value: "Kadın",
    },
    {
      key: "both",
      value: "Her ikiside",
    },
  ];

  const onSubmit = (data) => {
	let resp;

	for (const [key, value] of Object.entries(currentJob)){
		if(!data[key]){
			data[key] = value
		}
	}
	resp = jobList.map(obj => data.id === obj.id ? data : obj)
	console.log(resp)
    // // http.put("/hire/job/update/" + currentJob.id, data).then((data) => console.log(data));
	dispatch(currentJobAction(data))
    dispatch(allJobAction(resp));
    window.location.href = "#";
    reset(data);
  };
  return (
	  <div>
		{(console.log("render oldu", currentJob))}
      <div className="modal" id="jobEditModal">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="modal-box w-12/12 flex flex-col items-center"
        >
          <h3 className="font-bold text-lg text-center mb-5 border-b-4 w-full">
            İş Düzenle {currentJob.price}
          </h3>
          <div className="grid lg:grid-cols-2 w-full gap-4 ">
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">İş Kategorisi</span>
              </label>
              <select
                className="select select-bordered w-full "
                defaultValue={currentJob.category.id}
                {...register("jobCategoryId")}
              >
                {categories &&
                  categories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Ücret</span>
              </label>
              <label className="input-group">
                <input
                  {...register("price")}
                  type="number"
                  placeholder="Ücret giriniz..."
                  className="input input-bordered w-full"
                  defaultValue={currentJob.price}
                />
                <span>TRY</span>
              </label>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">İl</span>
              </label>
              <select
                className="select select-bordered w-full "
                {...register("cityId")}
                defaultValue={currentJob.city.id}
              >
                {cities &&
                  cities.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
              </select>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Cinsiyet</span>
              </label>
              <select
                defaultValue={currentJob.gender}
                className="select select-bordered w-full "
                {...register("gender")}
              >
                <option disabled>Seçiniz</option>
                {genders.map((gender) => (
                  <option key={gender.value} value={gender.key}>
                    {gender.value}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Başlangıç Tarihi</span>
              </label>
              <input
                {...register("startDate")}
                type="datetime-local"
                placeholder="Type here"
                className="input input-bordered w-full"
                defaultValue={currentJob.startDate.toString().slice(0, 16)}
              />
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Bitiş Tarihi</span>
              </label>
              <input
                {...register("endDate")}
                type="datetime-local"
                defaultValue={currentJob.endDate.toString().slice(0, 16)}
                placeholder="Type here"
                className="input input-bordered w-full "
              />
            </div>
          </div>
          <div className="flex flex-col w-full items-center">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Çalışan Sayısı</span>
              </label>
              <input
                {...register("workerCount")}
                type="number"
                placeholder="Çalışan sayısı giriniz..."
                className="input input-bordered w-full"
                defaultValue={currentJob.workerCount}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Açıklama</span>
              </label>
              <textarea
                {...register("description")}
                className="textarea textarea-bordered"
                placeholder="Açıklama"
                defaultValue={currentJob.description}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Adres</span>
              </label>
              <textarea
                className="textarea textarea-bordered"
                defaultValue={currentJob.address}
                {...register("address")}
                placeholder="Adres"
              />
            </div>
            <div className="form-control mt-3 w-full ">
              <label className="label cursor-pointer">
                <span className="label-text">Bahşiş Seçeneği</span>
                <input
                  {...register("tip")}
                  type="checkbox"
                  className="checkbox"
                  defaultChecked={currentJob.tip}
                />
              </label>
            </div>

            <div className="modal-action w-full">
              <button
                type="button"
                onClick={() => {
                  window.location.href = "#";
                }}
                className="btn btn-error text-white w-6/12"
              >
                İptal
              </button>
              <button
                type="submit"
                className="btn btn-success w-6/12 cursor-pointer items-center"
              >
                Güncelle
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
