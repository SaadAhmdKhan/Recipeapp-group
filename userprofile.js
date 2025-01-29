let post_container = document.getElementById("posts-container")

async function loadPosts(){
  try {
    const {data: postsData, error: postsError} = await supabase
    .from("posts")
    .select("")
    if(postsError) throw postsError
    if(postsData){
      console.log(postsData)
      try {
          const {data: usersData , usersError} = await supabase
          .from("users")
          .select("")
          if(usersError) throw usersError
          if(usersData){
            console.log(usersData)
            let usersMap = {};
            usersData.forEach((user)=>{
              usersMap[user.uid] = user
              console.log(usersMap)
            })
            
            var myId = JSON.parse(localStorage.getItem('currentuserinfo'))
            let myPost = false
            postsData.forEach((posts)=>{
              let currentUser = usersMap[posts.uid]
              console.log(currentUser)
              if(currentUser.uid === myId.uid){
                myPost = true
                post_container.innerHTML = `
                <div class="container"  id="posts-container">
                <div class="row">
                    <div class="sidebar col-12 col-md-12 col-lg-4 d-none d-md-block">
                        <h2 class="mt-5 logo-text ms-2 mt-0">Chû Fãng</h2>
                        <a href="#"> Home</a>
                        <a href="#">My Recipe</a>
                        <a href="#"> Public Feed</a>
                        <a href="#"> About</a>
                    </div>
                    <div>
                        <div class="container mt-5 col-12 col-md-12 col-lg-8 ">
                            <div class="row ms-2">
                                <div class="row align-items-center">
                                    <div class="col-md-4 text-center">
                                        <img id="profile-picture" src="assets/logo (1).png" alt="Profile Picture"
                                            class="img-fluid rounded-circle border border-3"
                                            style="height: 120px; width: 120px;">
                                    </div>
                                    <div class="col-md-8">
                                        <h2 class="mb-0">${currentUser.name}</h2>
                                        <small>${new Date(posts.created_at).toLocaleString}</small>
                                    </div>s
                                </div>
                                <!-- <div class="row col-md-4 text-center ">
                                    <img id="profile-picture" src="assets/logo (1).png" alt="Profile Picture" style="height: 120px; width: 120px;" class="img-fluid rounded-circle border border-3">
                                   
                                </div>
                                <div class="col-md-8 ">
                                    <h2 class="mb-0">${currentUser.name}</h2>
                                    <small>${new Date(posts.created_at).toLocaleString}</small>
                                </div> -->
                            </div>
                            <hr>
                            <h1 class="text-center">YOUR POST</h1>
                            <hr>
                        </div>
                        <div class="container mt-3">
                            <div class="row justify-content-center">
                                <div class="col-12 col-md-6">
                                    <div>
                                        <div class="card w-100 my-2">
                                            <div class="card-header d-flex gap-2 align-items-start">
                                                <div>
                                                    <img class="mt-1" src="assets/logo (1).png" width="50" height="50" bor
                                                        alt="">
                                                </div>
                                                <div class="d-flex flex-column ">
                                                    <h5 class="card-title p-0 m-0">${currentUser.name}
                                                    </h5>
                                                    <small>${new Date(posts.created_at).toLocaleString}</small>
                                                </div>
                                                // <!-- <button onclick="deleteMyPost()" >Delete </button> -->
                                            </div>
                                            <div class="card-body">
                                                <p class="card-text">description ....
                                                </p>
                                                <img style="width: 100%; "
                                                    src="assets/pngtree-lot-of-chinese-food-on-a-table-filled-with-chopsticks-picture-image_2612447.jpg"
                                                    alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`
              }
         
            })
          }
      } catch (error) {
       console.log(error) 
      }
    }
  } catch (error) {
    console.log(error)
  }
}

window.onload = loadPosts()