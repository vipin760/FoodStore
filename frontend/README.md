## lessons
1. introduction
2. install dev tools
3. create Angular app
    1. create project folder
    2. install @angular/cli
    3. create app as frontend
4. Add header (step 5)
    1. generate component
    2. add html
    3. add css
    4. add style.css for global
    5. set up model (step 6)
5. create food service(step 7)
6. create HomeComponent (step:8)
    1. add Html
    2. add Css
    3. add ts



step:1
//npm install -g @angular/cli

step:2
check version
//ng version

step:3
create angular app
//ng new frontend
//ng new frontend --skip-test by using dont want any test

step:4
git installation

remove git from the current application
//rm -rf .git using another one

open source control tab
init repository (so here check root folder not only front end)
then ost which that u want

step:5
## generate component
// ng g c components/partials/header
add <app-header></app-header> declare global


## add html
<header>
    <div class="container">
    <a routerLink="/" class="logo">Food Lover</a>
    <nav><ul><li><a routerLink="/login">Login</a></li><li class="menu-container">
                <a routerLink="/dashboard">Jhone</a>
                <div class="menu">
                    <a routerLink="/profile">Profile</a>
                <a routerLink="/orders">Orders</a>
                <a>Logout</a>
                </div>
            </li>
            <li>
                <a routerLink="/cart-page">
                    Cart <span>3</span>
                </a>
            </li>
        </ul>
    </nav>
    </div>
    </header>

    ## add css
    header{
    position: relative;
    background: rgb(244, 220, 220);
    padding: 0;
    border-bottom: 1px solid #950c37;
  }
  
  a{
    color: #af1313;
  }
  
  a:hover{
    background:#e72929;
    color: white;
    cursor: pointer;
  }
  
  .container{
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
  }
   
  a.logo{
    font-weight: bold;
    padding: 1rem;
  }
  
  ul{
    display: flex;
    list-style-type: none;
    margin: 0;
  }
  
  ul a{
    padding: 1rem;
    display: inline-block;
  }
  
  a span{
    background: #ff4d4d;
    color: white;
    padding: 0.1rem 0.45rem;
    border-radius: 100rem;
    font-size:0.9rem;
  }
  
  .menu-container{
    position: relative;
  }
  
  .menu{
    position:absolute;
    z-index:1;
    background:whitesmoke;
    display: none;
  }
  
  .menu-container:hover .menu{
    display: block;
  }
  
  .menu a{
    width: 100%;
    min-width:8rem;
  } 


## add style.css for global
/* You can add global styles to this file, and also import other style files */
@import url("https://fonts.googleapis.com/css2?family=Quicksand&display=swap");

*{
    box-sizing: border-box;
}
html{
    font-size: 16px;
}
html,
button{
    font-family: "Quicksand", "sans-serif";
}
body{
    margin: 0;
}
a{
    text-decoration: none;
}


step:6
## create model
src/shared/model/food.ts
## add model
export class Food{
    id!:string
    name!:string
    price!:number
    tags?:string[]
    favorite!:boolean
    stars!:number;
    imageUrl!:string;
    origins!:string[];
    cookTime!:string

}

## add sample Data from data.ts
## add asset for food

step:7
create service foldler
// ng g s service/food
this folder id connected to backend
first we don't have food so here import food manualy for data.ts

 getAll():Observable<Food[]>{
    return of(sample_foods)
  }



step:8 
## create homecomponents
 // ng g c components/pages/home

## create food folder
foods:Food[]=[]
take food data from foofservice

step: 9

## add html
<!-- <app-search></app-search>
<app-tags></app-tags>
<app-not-found
[visible]="!foods || !foods.length"
resetLinkText="Reset Search">
</app-not-found> -->
<ul>
  <li *ngFor="let food of foods">
  <!--using a tag router link is partially dynamic -->
    <a routerLink="/food/{{food.id}}">
    <!-- here src using[] tag is make a complete dynamic-->
      <img [src]="food.imageUrl" [alt]="food.name" />
      <div class="content">
        <div class="name">
          {{food.name}}
        </div>
        <!--add more detais about the foods -->
        <span class="favorite {{food.favorite?'':'not'}}">
          ❤
        </span>
        <!-- here add star rating-->
        <div class="stars">
          <star-rating [stars]="food.stars" />
        </div>
        <div class="product-item-footer">
          <div class="origins">
            <span *ngFor="let origin of food.origins">
              {{origin}}
            </span>
          </div>

          <div class="cook-time">
            <span>🕒</span>
            {{food.cookTime}}
          </div>
        </div>

        <div class="price">
          <span>
            {{food.price | currency}}
          </span>
        </div>
      </div>
    </a>
  </li>
</ul>







