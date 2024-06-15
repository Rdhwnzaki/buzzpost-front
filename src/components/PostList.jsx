import React from 'react'

function PostList() {
    const datas = [1, 1, 1, 1, 1, 1, 1, 1]

    return (
        <div className='container mx-auto mt-5'>
            <div className="card-actions justify-end">
                <button className="bg-amber-600 hover:bg-amber-700 text-white font-normal py-2 px-4 rounded mb-5" onClick={() => document.getElementById('my_modal_1').showModal()} >Add New Post</button>
            </div>
            <div className='grid grid-rows-2 grid-flow-col gap-4'>
                {datas.map((data, dataIdx) => {
                    return (
                        <div className="card w-62 bg-slate-800 shadow-xl">
                            <div className='card-title m-4'>
                                <div className='flex flex-row'>
                                    <div>
                                        <div className="avatar">
                                            <div className="w-5 rounded-full ring ring-amber-600 ring-offset-slate-800 ring-offset-2">
                                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt='profile' />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ms-3 text-sm mt-0'>
                                        Olivia Rodrigo
                                    </div>
                                </div>
                            </div>
                            <figure><img src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="post" /></figure>
                            <div className="card-body">
                                <p className='font-semibold'>Title</p>
                                <p className='font-light'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg mb-3">Add New Post</h3>
                    <div className='mb-3'>
                        <p className='label'>Title</p>
                        <input type="text" placeholder="Enter Title" className="input input-bordered w-full" />
                    </div>
                    <div className='mb-3'>
                        <p className='label'>Image</p>
                        <input type="file" placeholder="Enter Title" className=" w-full ms-1" />
                        <p class="mt-1 text-sm text-gray-500 dark:text-gray-300 ms-1" id="file_input_help">PNG, JPG or GIF.</p>

                    </div>
                    <div className='mb-3'>
                        <p className='label'>Description</p>
                        <textarea className="textarea textarea-bordered w-full" placeholder="Enter Description"></textarea>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="bg-amber-600 hover:bg-amber-700 text-white font-normal py-2 px-4 rounded mb-5">Upload</button>
                    </div>
                </div>
            </dialog>
        </div>
    )
}

export default PostList