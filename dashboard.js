let datecontent = document.getElementById("current-year")
let recipesdiv = document.getElementById("recipes");
let recipename = document.getElementById("recipe-name");
let recipeingre = document.getElementById("ingredients");
let recipemethod = document.getElementById("method");
let postbtn = document.getElementById("post-btn");



const chineseFoodRecipes = {
  dish1: {
    name: "Kung Pao Chicken",
    ingredients: `
        - 500g chicken breast, diced
        - 2 tablespoons vegetable oil
        - 1/2 cup unsalted peanuts
        - 3-4 dried red chilies
        - 1 onion, chopped
        - 2 garlic cloves, minced
        - 1 tablespoon ginger, minced
        - 1/4 cup soy sauce
        - 1 tablespoon rice vinegar
        - 1 tablespoon sugar
        - 1 tablespoon cornstarch
        - 1 tablespoon water
      `,
    method: `
        1. Heat vegetable oil in a pan over medium heat.
        2. Add dried chilies and stir-fry for about 30 seconds.
        3. Add chicken and cook until golden and cooked through.
        4. Add chopped onions, garlic, and ginger, and cook for 2-3 minutes.
        5. In a small bowl, mix soy sauce, rice vinegar, sugar, cornstarch, and water.
        6. Pour the sauce over the chicken mixture and cook for another 2 minutes.
        7. Stir in peanuts and serve hot.
      `,
      image:'https://www.oliveandmango.com/images/uploads/2020_04_27_takeout_style_kung_pao_chicken_1.jpg'
  },
  dish2: {
    name: "Sweet and Sour Pork",
    ingredients: `
        - 500g pork tenderloin, cut into cubes
        - 1/2 cup cornstarch
        - 2 tablespoons vegetable oil
        - 1 onion, sliced
        - 1 bell pepper, chopped
        - 1/2 cup pineapple chunks
        - 1/4 cup ketchup
        - 1/4 cup white vinegar
        - 2 tablespoons soy sauce
        - 1/4 cup sugar
      `,
    method: `
        1. Toss pork cubes in cornstarch to coat.
        2. Heat vegetable oil in a pan and fry pork until crispy, then set aside.
        3. In the same pan, stir-fry onions and bell pepper for 2-3 minutes.
        4. Add pineapple chunks and cook for another 2 minutes.
        5. In a bowl, mix ketchup, vinegar, soy sauce, and sugar to make the sauce.
        6. Pour the sauce over the vegetables and bring to a simmer.
        7. Add the fried pork and toss everything together.
        8. Serve hot.
      `,
      image:'https://tasteasianfood.com/wp-content/uploads/2019/05/sweet-and-sour-pork-featured-image.jpg'
  },
  dish3: {
    name: "Fried Rice",
    ingredients: `
        - 2 cups cooked rice (preferably cold)
        - 2 tablespoons vegetable oil
        - 1/2 cup peas
        - 1/2 cup carrots, diced
        - 2 eggs, beaten
        - 2 green onions, chopped
        - 2 tablespoons soy sauce
        - 1 tablespoon sesame oil
        - 1 teaspoon garlic, minced
      `,
    method: `
        1. Heat vegetable oil in a large pan or wok over medium heat.
        2. Add garlic, peas, and carrots, stir-fry for about 2-3 minutes.
        3. Push the vegetables to one side of the pan and pour in the beaten eggs.
        4. Scramble the eggs until fully cooked, then mix with the vegetables.
        5. Add the cold rice, breaking up any clumps, and stir-fry for 3-4 minutes.
        6. Stir in soy sauce, sesame oil, and green onions.
        7. Cook for an additional 2-3 minutes, then serve.
      `,
      image:'	https://static.sooperchef.pk/topics/2018/06/Chicken-Shashlik-Recipe-550x375.jpg'
  },
  dish4: {
    name: "Mapo Tofu",
    ingredients: `
        - 400g firm tofu, cut into cubes
        - 200g ground pork
        - 2 tablespoons vegetable oil
        - 1 tablespoon ginger, minced
        - 2 cloves garlic, minced
        - 2 tablespoons soy sauce
        - 2 tablespoons doubanjiang (fermented bean paste)
        - 1 tablespoon Sichuan peppercorns
        - 1/2 cup chicken broth
        - 1 tablespoon cornstarch mixed with 2 tablespoons water
      `,
    method: `
        1. Heat vegetable oil in a pan over medium heat.
        2. Add ground pork and cook until browned.
        3. Add ginger and garlic, stir-fry for 1-2 minutes.
        4. Add soy sauce, doubanjiang, and Sichuan peppercorns, stir to combine.
        5. Pour in chicken broth and bring to a simmer.
        6. Carefully add tofu cubes, and let it simmer for 5-7 minutes.
        7. Stir in cornstarch mixture to thicken the sauce.
        8. Cook for an additional 2 minutes, then serve hot.
      `,
      image:'	https://img.delicious.com.au/mGxuLbz0/del/2015/10/eggplant-and-red-bean-mapo-tofu-14934-2.jpg'
  },
  dish5:
    {
      name: "General Tso's Chicken",
      ingredients: 
        `- 500g chicken breast, cut into bite-sized pieces
        - 1/2 cup cornstarch
        - 1/4 cup soy sauce
        - 1 tablespoon rice vinegar
        - 2 tablespoons sugar
        - 2 tablespoons hoisin sauce
        - 1 tablespoon sesame oil
        - 2 cloves garlic, minced
        - 2 teaspoons ginger, minced
        - 3-4 dried red chilies
        - 2 tablespoons vegetable oil
        - 1 tablespoon cornstarch mixed with 2 tablespoons water (for thickening)
        - 1/2 cup water
        - 1 green onion, chopped (for garnish)`
      ,
      method: `
        1. Toss chicken pieces in cornstarch to coat evenly.
        2. Heat vegetable oil in a pan over medium-high heat, then fry the chicken until crispy and golden. Remove and set aside.
        3. In the same pan, add sesame oil, garlic, ginger, and dried red chilies. Stir-fry for about 1 minute.
        4. In a bowl, mix soy sauce, rice vinegar, sugar, hoisin sauce, and water. Add this sauce to the pan and bring to a simmer.
        5. Stir in the cornstarch-water mixture to thicken the sauce.
        6. Add the fried chicken back into the pan and toss to coat in the sauce.
        7. Garnish with chopped green onions and serve hot.
      `,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMIp78_E7a9W6lMfAbVdr_SkycQK30WT4tsg&s"
    },
    dish6:{
      name: "Chicken Chow Mein",
      ingredients: `
        - 500g chicken breast, thinly sliced
        - 200g chow mein noodles (or egg noodles)
        - 2 tablespoons vegetable oil
        - 1 onion, sliced
        - 1 bell pepper, sliced
        - 1/2 cup shredded carrots
        - 2 cloves garlic, minced
        - 2 tablespoons soy sauce
        - 1 tablespoon oyster sauce
        - 1 tablespoon hoisin sauce
        - 1 tablespoon sesame oil
        - 1/4 cup chicken broth
        - 1 teaspoon cornstarch mixed with 2 tablespoons water (for thickening)
        - 2-3 green onions, chopped (for garnish)
      `,
      method: `
        1. Cook the chow mein noodles according to package instructions, then drain and set aside.
        2. Heat vegetable oil in a large pan or wok over medium-high heat.
        3. Add the sliced chicken breast and stir-fry until golden brown and cooked through. Remove and set aside.
        4. In the same pan, add onion, bell pepper, and carrots, and stir-fry for 3-4 minutes.
        5. Add minced garlic and cook for another minute.
        6. Stir in soy sauce, oyster sauce, hoisin sauce, sesame oil, and chicken broth. Bring to a simmer.
        7. Add the cooked noodles to the pan, then pour in the cornstarch-water mixture to thicken the sauce.
        8. Add the chicken back into the pan and toss everything together to combine.
        9. Garnish with chopped green onions and serve hot.
      `,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIwbrgg-G4pEcpobany2rblsEXFdJyjIMpHg&s"
    }
    
  }
;

let id=1
let accordiontarget=5
let accordiontarget2=10

for (name in chineseFoodRecipes) {
  id++
  accordiontarget++
  accordiontarget2++
  console.log(id)
  if(recipesdiv){
  recipesdiv.innerHTML += `<div class="col-12 col-md-4  d-flex mb-3 justify-content-center">
 <div class="card" style="width: 75%;">
  <img src=${chineseFoodRecipes[name].image} class="card-img-top" alt="...">

  <div class="card-body text-center " style="background-color:#FEE0D6; color:#ac4251">
    <h3>${chineseFoodRecipes[name].name}</h3>
    <div class="accordion accordion-flush" id=accordionFlushExample${id}>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target=#flush-collapse${accordiontarget} aria-expanded="false" aria-controls=flush-collapse${accordiontarget}>
       INGREDIENTS
      </button>
    </h2>
    <div id=flush-collapse${accordiontarget} class="accordion-collapse collapse" data-bs-parent=#accordionFlushExample${id}>
      <div class="accordion-body">${chineseFoodRecipes[name].ingredients}</div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target=#flush-collapse${accordiontarget2} aria-expanded="false" aria-controls=flush-collapse${accordiontarget2}>
       METHOD
      </button>
    </h2>
    <div id=flush-collapse${accordiontarget2} class="accordion-collapse collapse" data-bs-parent=#accordionFlushExample${id}>
      <div class="accordion-body">${chineseFoodRecipes[name].method}</div>
    </div>
  </div>
</div>
    `;
}
}


async function dataEntry(params) {
  console.log(`${recipename.value} ${recipeingre.value} ${recipemethod.value} `)
 let data = localStorage.getItem("currentuserinfo")
 data=JSON.parse(data)
  try {
    const { error } = await supabase
  .from('posts')
  .insert({ ingredients: recipeingre.value, name: recipename.value,methods:recipemethod.value,UID:data.uid })
  
  if(error) throw error  
  } catch (error) {
    console.log(error)
    
  }
  finally{
    Swal.fire({
      title: "POST UPDATED Successfully!",
      icon: "success",
      draggable: true,
    });
  }
}

postbtn.addEventListener('click',dataEntry)

if(datecontent){
  datecontent.textContent = new Date().getFullYear();
}








