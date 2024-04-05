        // Array of image URLs for the slideshow

        var images = [

            //"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAqhTHHb4QXn5e4hAZdWpfKrW6ZKgcJnbByg&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnO1rVhPoblRvGpEAUxQercjuNWzoPtiD5IezIrK8FPhv8E0MmNWBN1AvT&s=10",
            "https://static.printler.com/cache/1/d/1/6/3/2/1d16328afbff8b7fb8d52d5bfb84d9540cd24204.jpg",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV7MRlkkJm3rag6d9gx9zr6n8O1hmqLVFHak9kSO7vBkKu1b9s739yrd_X&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa1WXw1daMyD3h9vZxaw-f62tpCyKpl23SlHm4K3YFj60KGJrXyg3dq6A&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjDjmEmu7q1zSw4zAx76jNHc6QrJucQ8ExcoKy53aTZHFuelCpXdBJYOrB&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTkDCYTDKw_6x6_rHbC_WuWAi-4tiLu74d0g&usqp=CAU",
            //"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3Brn4-_r2pc9BR1W8Jj5keOhMo7b8U4NItIyO0V9oMiunri3r2u4ba04D&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrGtcgipSCDFoyTKOcGOAukF5m7kOPglhLSxtpf9k6v0MtshZjX6XkxUQ&s=10",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVPs0rqJEKfo4L6PSvBBgDqSeDYJCzrwIooA&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCs2kVXznzFtzk2MdcbM1i3G5voU8Bv8TgIg&usqp=CAU",
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWYZz5ToqrTLTQczWwYVjdDNcTjifx9bw8rg&usqp=CAU",
            // Add more image URLs as needed
        ];

        var currentImageIndex = 0;
        var slideshowImg = document.getElementById("slideshowImg");

        function changeImage() {
            // Change the src attribute of the image to the next image in the array
            slideshowImg.src = images[currentImageIndex];

            // Increment currentImageIndex and loop back to the start if necessary
            currentImageIndex = (currentImageIndex + 1) % images.length;
        }

        // Change image every 3 seconds (3000 milliseconds)
        setInterval(changeImage, 2500);