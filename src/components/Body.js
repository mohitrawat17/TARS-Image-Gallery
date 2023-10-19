import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Masonry from "@mui/lab/Masonry";
import Shimmer from "./Shimmer";
import Modal from "./Modal";

const Body = () => {
  const [allImages, setAllImages] = useState([]);
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const[imageId,setImageId]=useState('');
  const[imageData,setImageData]=useState({});

  // console.log(allImages);

  // fetching data on dashboard and on scrolling

  const fetchImages = async () => {
    const data = await fetch(
      `https://api.unsplash.com/photos?page=${page}&client_id=Btyj9Y0wVKBt5mhnJmMXQkRPasmBoog5BhiPZB7mnsQ`
    );
    const json = await data.json();
    setAllImages((prev) => [...prev, ...json]);
  };
  useEffect(() => {
    fetchImages();
  }, [page]);

  // updating data on page whenever something is typed on search bar

  const handleSearch = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${text}&client_id=Btyj9Y0wVKBt5mhnJmMXQkRPasmBoog5BhiPZB7mnsQ`
    );
    const json = await data.json();
    setAllImages(json.results);
  };

  useEffect(() => {
    if (text) {
      handleSearch();
    } else {
      fetchImages;
    }
  }, [text]);

  // logic for infinite scroll

  const handleInfiniteScroll = () => {
    // console.log("height",document.documentElement.scrollHeight);
    // console.log("innerHeight",window.innerHeight);
    // console.log("scrolltop",document.documentElement.scrollTop);
    // scrollTop + innerheight =height
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);


  // model popup logic
  const showModalPopup = (id) => {
    setShowModal(true);
    setImageId(id);
    fetchSpecificImage(id)
  };

  const closeModal = () => setShowModal(false);


  // fetching data of specific image
  const fetchSpecificImage=async(imageId)=>{
    const data=await fetch(`https://api.unsplash.com/photos/${imageId}?client_id=Btyj9Y0wVKBt5mhnJmMXQkRPasmBoog5BhiPZB7mnsQ`)
const json=await data.json();
setImageData(json)
  }

console.log(imageData);
  // returning JSX
  return (
    <div className="my-4">
      <div className="searchBg bg-cover h-60 flex flex-col items-center justify-center p-5">
        <h2 className="mb-5 text-2xl font-bold tracking-wide text-white">
          Download High Quality Images by creators
        </h2>
        <h2 className="mb-3 text-sm text-gray-300">
          Over 2.4 million+ stock Images by our talented community
        </h2>
        <div className="w-full flex justify-center">
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="text"
            className="outline-none w-6/12 px-3 py-2 rounded-l-lg"
            placeholder="Search high resolution Images, categories, wallpapers"
          />
          <SearchIcon
            onClick={handleSearch}
            className="bg-white rounded-r-lg cursor-pointer"
            style={{ fontSize: "40px" }}
          />
        </div>
      </div>


<div className="h-full w-full flex justify-center items-center">
      {showModal && <Modal data={imageData} hideModal={closeModal} />}
</div>
      {/* all cards here */}
      <div className="m-10">
        {allImages.length === 0 ? (
          <Shimmer />
        ) : (
          <Masonry columns={4} spacing={2}>
            {allImages.map((data) => {
              {/* single card */}
              return (
                <div
                key={data.id}

                  onClick={()=>showModalPopup(data.id)}
                  className="cursor-pointer rounded-2xl border border-gray-300 h-fit"
                >
                  <img className="rounded-t-2xl w-full" src={data?.urls?.small} />

                  <div className="flex my-3 mx-2 justify-between">
                    <div className="flex gap-3">
                      <img
                        className="rounded-full h-10"
                        src={data?.user?.profile_image?.small}
                      />
                      <div>
                        <h3 className="font-semibold">{data?.user?.name}</h3>
                        <h2 className="text-gray-700">
                          @{data?.user?.username}
                        </h2>
                      </div>
                    </div>

                    <div className="flex gap-1">
                      <ThumbUpIcon />
                      <div>{data?.likes} </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Masonry>
        )}
      </div>
    </div>
  );
};

export default Body;
