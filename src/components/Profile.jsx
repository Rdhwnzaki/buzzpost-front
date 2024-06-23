import React from "react";

function Profile() {
  const datas = [1, 1, 1, 1];
  return (
    <div className="container mx-auto mt-5">
      <div className="card-actions justify-end"></div>

      {/* Profile Card */}
      <div class="card bg-slate-800 shadow-xl mb-5 p-4 flex flex-col sm:flex-row sm:items-center">
        <figure class="flex-shrink-0 mx-auto sm:mx-0">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
            alt="Profile Picture"
            class="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full"
          />
        </figure>
        <div class="card-body text-white mt-4 sm:mt-0 sm:ml-6">
          <h2 class="card-title text-2xl mb-2 text-center sm:text-left">My Profile</h2>
          <div class="space-y-1 text-center sm:text-left">
            <p>
              <strong>Fullname:</strong> Teguh Bagmar
            </p>
            <p>
              <strong>Email:</strong> teguh21@gmail.com
            </p>
            <p>
              <strong>Username:</strong> teguhkece
            </p>
            <p>
              <strong>Password:</strong> ********
            </p>
            <p>
              <strong>Phone Number:</strong> 091911919
            </p>
          </div>
          <div class="card-actions justify-center sm:justify-end mt-4">
            <button class="bg-blue-600 hover:bg-blue-700 text-white rounded py-2 px-4">Change</button>
          </div>
        </div>
      </div>

      {/* Post List Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {datas.map((data, dataIdx) => {
          return (
            <div key={dataIdx} className="card w-full bg-slate-800 shadow-xl">
              <div className="card-title m-4">
                <div className="flex flex-row">
                  <div className="avatar">
                    <div className="w-5 rounded-full ring ring-amber-600 ring-offset-slate-800 ring-offset-2">
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        alt="profile"
                      />
                    </div>
                  </div>
                  <div className="ms-3 text-sm mt-0">Teguh Bagmar</div>
                </div>
              </div>
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="post"
                />
              </figure>
              <div className="card-body">
                <p className="font-semibold">Title</p>
                <p className="font-light">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s
                </p>
                <div className="card-actions justify-end mt-3">
                  <button className="btn btn-sm btn-outline btn-secondary">Delete</button>
                  <button className="btn btn-sm btn-outline btn-accent">Update</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg mb-3">Add New Post</h3>
          <div className="mb-3">
            <p className="label">Title</p>
            <input type="text" placeholder="Enter Title" className="input input-bordered w-full" />
          </div>
          <div className="mb-3">
            <p className="label">Image</p>
            <input type="file" className="w-full ms-1" />
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300 ms-1" id="file_input_help">
              PNG, JPG or GIF.
            </p>
          </div>
          <div className="mb-3">
            <p className="label">Description</p>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Enter Description"
            ></textarea>
          </div>
          <div className="card-actions justify-end">
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-normal py-2 px-4 rounded mb-5">
              Upload
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default Profile;
