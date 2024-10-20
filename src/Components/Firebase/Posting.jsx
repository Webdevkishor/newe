import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db, storage } from './ForeverFirebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
function CreatePost() {
  const [Price, setPrice] = useState('');
  const [Pname, setPname] = useState('');
  const [Title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const navv=useNavigate()
  const handleFileChange = (e) => {
    if (e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const createPost = async (e) => {
    if(Pname!=" ")
      {
        e.preventDefault();
        toast.success("Posted");
        if (!file) {
          toast.success("Please Select the File");
          return;
        }
    
        try {
          // Upload file to Firebase Storage
          const storageRef = ref(storage, `images/${file.name}`);
          const snapshot = await uploadBytes(storageRef, file);
          const imageUrl = await getDownloadURL(snapshot.ref);
    
          // Add post to Firestore
          await addDoc(collection(db, 'Trend'), {
            Pname,
            Price,
            imageUrl,
            Title,
            timestamp: new Date(),
          });
    
          // Reset form fields
          setPrice('');
          setPname('');
          setFile(null);
          navv('/Newlyadded')
        } catch (error) {
          console.error('Error adding document:', error);
        }
      }
      else{
        e.preventDefault();
        toast.success("Check your User Name");
        navv('/pos12312321324325121')
      }
  };
  return (
    <div>
      <div class="relative p-4 rounded-md text-black bg-white">
      <div class="text-center sm:text-2xl text-xl font-bold mb-2 text-[#1e0e4b]"><span class="text-yellow-700 text-4xl relative top-1">Add New Product</span>
      <ToastContainer 
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    
    <center><form onSubmit={createPost} class="sm:flex  sm:p-10 sm:w-1/2 sm:flex-col sm:gap-10 flex flex-col gap-8 pt-10">
        <input className='sm:p-3 p-2'
          type="text"
          value={Pname}
          onChange={(e) => setPname(e.target.value)}
          placeholder="Enter The Product Name"
          required
        />
        <input  className='sm:p-3 p-2'
          type="text"
          value={Price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="Enter The Price"
          required
        />
         <input className='sm:p-3 p-2'
          type="text"
          value={Title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter The Tag Name"
          required
        />
        <input
          type="file"
          onChange={handleFileChange}
          required
        />
       <button type="submit"
  class="inline-flex w-full items-center justify-center px-10 py-3 border border-transparent text-xl font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
>
Post
</button>
      </form>
      </center>
    </div>
    {/* <div class="text-sm text-center mt-[1.6rem]">Don’t have an account yet? <a class="text-sm text-[#7747ff]" href="#">Sign up for free!</a></div> */}
    </div>
    </div>
    
  );
}
export default CreatePost;



// <div class="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white">
//     <div class="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">Welcome back to <span class="text-[#7747ff]">App</span></div>
//     <div class="text-sm font-normal mb-4 text-center text-[#1e0e4b]">Log in to your account</div>
// <form class="flex flex-col gap-3">
//     <div class="block relative"> 
//     <label for="email" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Email</label>
//     <input type="text" id="email" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2  ring-gray-900 outline-0">
    
//     </div>
//     <div class="block relative"> 
//     <label for="password" class="block text-gray-600 cursor-text text-sm leading-[140%] font-normal mb-2">Password</label>
//     <input type="text" id="password" class="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0">
    
//     </div>
//     <div>
//     <a class="text-sm text-[#7747ff]" href="#">Forgot your password?
//     </a></div>
//     <button type="submit" class="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal">Submit</button>

// </form>

// </div>