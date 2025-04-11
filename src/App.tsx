import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [imageUrl, setImageUrl] = useState('');
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="bg-pink-100 p-6 rounded-xl w-[350px] md:w-[400px] shadow-md flex flex-col items-center">
          
          {/* Profile image input */}
          <div className="w-24 h-24 mb-4 cursor-pointer hover:opacity-80">
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
              ref={fileInputRef}
            />
            <div 
              onClick={handleProfileImageClick} 
              className="w-full h-full rounded-full overflow-hidden flex justify-center items-center bg-gray-200"
            >
              {imageUrl ? (
                <img
                  src={imageUrl}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <div className="flex justify-center items-center w-full h-full text-gray-400">
                  <span className="text-2xl">+</span>
                </div>
              )}
            </div>
          </div>

          {/* Name input */}
          <div className="w-full md:w-[350px] mb-4">
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none"
            />
          </div>

          {/* Bio textarea */}
          <div className="w-full md:w-[350px] mb-4">
            <textarea
              rows={3}
              placeholder="Write a short bio about yourself..."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full p-2 rounded-lg border border-gray-300 focus:border-purple-500 focus:outline-none resize-none"
            />
          </div>

          {/* Save Changes Button */}
          <button
  type="button"
  disabled={false}
  className="bg-blue-800 hover:bg-pink-600 text-pink-700 font-semibold px-4 py-2 rounded-lg shadow-md transition-all duration-200 opacity-100 cursor-pointer"
>
  Save Changes
</button>



        </div>
      </div>
    </>
  );
}

export default App;
