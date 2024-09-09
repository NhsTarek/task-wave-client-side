import axios from "axios";

// For image upload
export const imageUpload = async (image) => {
  try {
    const formData = new FormData();
    formData.append("image", image); 

    const response = await axios.post(
      `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_KEY}`,
      formData
    );

    return response.data.data.url; 

  } catch (error) {
    console.error("Image upload failed:", error);
    
  }
};
