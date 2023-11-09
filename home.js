const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
    }

    function nextSlide() {
      currentSlide++;
      if (currentSlide >= slides.length) {
        currentSlide = 0;
      }
      showSlide(currentSlide);
    }

    setInterval(nextSlide, 2000);
        // banner chu
         // Optional: Stop the animation when the user hovers over the banner
         var banner = document.getElementById('bannerchu');
         banner.addEventListener('mouseover', function() {
             this.style.animationPlayState = 'paused';
         });
         banner.addEventListener('mouseout', function() {
             this.style.animationPlayState = 'running';
         });
        //  banner duoi
        var images = [
            "/img/bannerduoi1.jpg",
            "/img/bannerduoi2.jpg",
            "/img/bannerduoi3.jpg",
            "/img/bannerduoi4.jpg",
            "/img/bannerduoi5.jpg",
            "/img/bannerduoi6.jpg",
            "/img/bannerduoi7.jpg"
        ];
        var currentIndex = 0;
        var bannerImage = document.getElementById("currentImagee");
        var thumbnails = document.querySelectorAll(".thumbnail");
        
        function showImage(index) {
            bannerImage.src = images[index];
            currentIndex = index;
        
            for (var i = 0; i < thumbnails.length; i++) {
                if (i === index) {
                    thumbnails[i].classList.add("selected");
                } else {
                    thumbnails[i].classList.remove("selected");
                }
            }
        }
        
        function changeImage(index) {
            showImage(index);
        }
        
        function previousImage() {
            currentIndex--;
            if (currentIndex < 0) {
                currentIndex = images.length - 1;
            }
            showImage(currentIndex);
        }
        
        function nextImage() {
            currentIndex++;
            if (currentIndex >= images.length) {
                currentIndex = 0;
            }
            showImage(currentIndex);
        }
        
        showImage(currentIndex); // Hiển thị ảnh đầu tiên
        setInterval(nextImage, 3000); // Chuyển ảnh sau 3 giây
        // chi tiet san pham
        function openModal() {
            var modal = document.getElementById('modal');
            modal.style.display = 'flex';
        
            var instructionsRow = document.getElementById('instructions-row');

            var warrantyRow1 = document.getElementById('warranty1-row');
            var warrantyRow2 = document.getElementById('warranty2-row');
            var warrantyRow3 = document.getElementById('warranty3-row');
            var warrantyRow4 = document.getElementById('warranty4-row');
            var warrantyRow5 = document.getElementById('warranty5-row');
        
        
        
            var ratingRow1 = document.getElementById('rating1-row');
            var ratingRow2 = document.getElementById('rating2-row');
            var ratingRow3 = document.getElementById('rating3-row');
            var ratingRow4 = document.getElementById('rating4-row');
            var ratingRow5 = document.getElementById('rating5-row');
            var ratingRow6 = document.getElementById('rating6-row');
            var ratingRow7 = document.getElementById('rating7-row');
            var ratingRow8 = document.getElementById('rating8-row');
            var ratingRow9 = document.getElementById('rating9-row');
        
            instructionsRow.style.display = 'none';
            warrantyRow1.style.display = 'none';
            warrantyRow2.style.display = 'none';
            warrantyRow3.style.display = 'none';
            warrantyRow4.style.display = 'none';
            warrantyRow5.style.display = 'none';
        
            ratingRow1.style.display = 'table';
            ratingRow2.style.display = 'table';
            ratingRow3.style.display = 'table';
            ratingRow4.style.display = 'table';
            ratingRow5.style.display = 'table';
            ratingRow6.style.display = 'table';
            ratingRow7.style.display = 'table';
            ratingRow8.style.display = 'table';
            ratingRow9.style.display = 'table';
        }
        
        function showInstructions() {
            var instructionsRow = document.getElementById('instructions-row');

            var warrantyRow1 = document.getElementById('warranty1-row');
            var warrantyRow2 = document.getElementById('warranty2-row');
            var warrantyRow3 = document.getElementById('warranty3-row');
            var warrantyRow4 = document.getElementById('warranty4-row');
            var warrantyRow5 = document.getElementById('warranty5-row');
        
        
        
            var ratingRow1 = document.getElementById('rating1-row');
            var ratingRow2 = document.getElementById('rating2-row');
            var ratingRow3 = document.getElementById('rating3-row');
            var ratingRow4 = document.getElementById('rating4-row');
            var ratingRow5 = document.getElementById('rating5-row');
            var ratingRow6 = document.getElementById('rating6-row');
            var ratingRow7 = document.getElementById('rating7-row');
            var ratingRow8 = document.getElementById('rating8-row');
            var ratingRow9 = document.getElementById('rating9-row');
        
            instructionsRow.style.display = 'table-row';
            
            warrantyRow1.style.display = 'none';
            warrantyRow2.style.display = 'none';
            warrantyRow3.style.display = 'none';
            warrantyRow4.style.display = 'none';
            warrantyRow5.style.display = 'none';
        
            ratingRow1.style.display = 'none';
            ratingRow2.style.display = 'none';
            ratingRow3.style.display = 'none';
            ratingRow4.style.display = 'none';
            ratingRow5.style.display = 'none';
            ratingRow6.style.display = 'none';
            ratingRow7.style.display = 'none';
            ratingRow8.style.display = 'none';
            ratingRow9.style.display = 'none';
        }
        
        function showWarranty() {
            var instructionsRow = document.getElementById('instructions-row');

            var warrantyRow1 = document.getElementById('warranty1-row');
            var warrantyRow2 = document.getElementById('warranty2-row');
            var warrantyRow3 = document.getElementById('warranty3-row');
            var warrantyRow4 = document.getElementById('warranty4-row');
            var warrantyRow5 = document.getElementById('warranty5-row');
        
        
        
            var ratingRow1 = document.getElementById('rating1-row');
            var ratingRow2 = document.getElementById('rating2-row');
            var ratingRow3 = document.getElementById('rating3-row');
            var ratingRow4 = document.getElementById('rating4-row');
            var ratingRow5 = document.getElementById('rating5-row');
            var ratingRow6 = document.getElementById('rating6-row');
            var ratingRow7 = document.getElementById('rating7-row');
            var ratingRow8 = document.getElementById('rating8-row');
            var ratingRow9 = document.getElementById('rating9-row');
        

            instructionsRow.style.display = 'none';

            warrantyRow1.style.display = 'table-row';
            warrantyRow2.style.display = 'table-row';
            warrantyRow3.style.display = 'table-row';
            warrantyRow4.style.display = 'table-row';
            warrantyRow5.style.display = 'table-row';
        
            ratingRow1.style.display = 'none';
            ratingRow2.style.display = 'none';
            ratingRow3.style.display = 'none';
            ratingRow4.style.display = 'none';
            ratingRow5.style.display = 'none';
            ratingRow6.style.display = 'none';
            ratingRow7.style.display = 'none';
            ratingRow8.style.display = 'none';
            ratingRow9.style.display = 'none';
        }
        
        function closeModal() {
            var modal = document.getElementById('modal');
            modal.style.display = 'none';
        }
        // Hướng dẫn sử dụng
        function showSection(sectionId) {
            const sections = document.getElementsByClassName("card");
            for (let i = 0; i < sections.length; i++) {
              sections[i].classList.remove("active");
              sections[i].classList.add("hidden");
            }
    
            const section = document.getElementById(sectionId);
            section.classList.remove("hidden");
            section.classList.add("active");
          }
    
          window.addEventListener("DOMContentLoaded", function() {
            const section = document.getElementById("section1");
            section.classList.remove("hidden");
            section.classList.add("active");
          });
        // Bình luận
        $(document).ready(function() {
            // Xử lý sự kiện khi gửi bình luận
            $("form").submit(function(event) {
              event.preventDefault(); // Ngăn chặn việc gửi form
      
              // Lấy giá trị từ các trường input
              var name = $("#name").val();
              var comment = $("#comment").val();
              var image = $("#image")[0].files[0];
              var sort = $("input[name='sort']:checked").val();
      
              // Tạo một phần tử li chứa thông tin bình luận
              var li = $("<li>").addClass("list-group-item");
              var nameElement = $("<h5>").addClass("mb-1").text(name);
              var commentElement = $("<p>").addClass("mb-1").text(comment);
      
              // Thêm thông tin bình luận vào phần tử li
              li.append(nameElement);
              li.append(commentElement);
      
              if (image) {
                var imageElement = $("<img>").addClass("mb-1").attr("src", URL.createObjectURL(image)).css("max-width", "700px");
                li.append(imageElement);
              }
      
              // Thêm li vào danh sách bình luận
              var commentList = $("#comments");
      
              if (sort === "newest") {
                commentList.prepend(li); // Thêm li vào đầu danh sách
              } else {
                commentList.append(li); // Thêm li vào cuối danh sách
              }
      
              // Đếm số lượng bình luận
              var commentCount = commentList.children().length;
      
              // Hiển thị số lượng bình luận
              $("#commentCount").text("Số bình luận: " + commentCount);
      
              // Xóa nội dung trong các trường input sau khi gửi bình luận
              $("#name").val("");
              $("#comment").val("");
              $("#image").val("");
            });
          });