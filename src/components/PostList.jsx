import React from "react";

function PostList() {
  const datas = [1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div className="container mx-auto mt-5">
      <div className="flex justify-end mb-5">
        <button
          className="bg-amber-600 hover:bg-amber-700 text-white font-normal py-2 px-4 rounded"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          Add New Post
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {datas.map((data, dataIdx) => {
          return (
            <div key={dataIdx} className="card w-full bg-slate-800 shadow-xl">
              <div className="card-title m-4">
                <div className="flex items-center">
                  <div className="avatar">
                    <div className="w-10 rounded-full ring ring-amber-600 ring-offset-slate-800 ring-offset-2">
                      <img
                        src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
                        alt="profile"
                      />
                    </div>
                  </div>
                  <div className="ml-3 text-sm">Olivia Rodrigo</div>
                </div>
              </div>
              <figure>
                <img
                  src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                  alt="post"
                  className="w-full h-48 object-cover"
                />
              </figure>
              <div className="card-body">
                <p className="font-semibold">Title</p>
                <p className="font-light">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
                  Ipsum has been the industry's standard dummy text ever since the 1500s.
                </p>
                <div className="card-actions justify-end mt-3">
                  <button className="btn btn-sm btn-outline btn-info">View</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box bg-slate-800">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <h3 className="font-bold text-lg mb-3">Add New Post</h3>
          <div className="mb-3">
            <label className="label">Title</label>
            <input
              type="text"
              placeholder="Enter Title"
              className="input input-bordered text-black w-full"
            />
          </div>
          <div className="mb-3">
            <label className="label">Image</label>
            <input type="file" className="w-full" />
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300">PNG, JPG or GIF.</p>
          </div>
          <div className="mb-3">
            <label className="label">Description</label>
            <textarea
              className="textarea textarea-bordered text-black w-full"
              placeholder="Enter Description"
            ></textarea>
          </div>
          <div className="card-actions justify-end">
            <button className="bg-amber-600 hover:bg-amber-700 text-white font-normal py-2 px-4 rounded">
              Upload
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
}

export default PostList;
