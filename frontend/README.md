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
7. search(step 10)
    1. add method to food service
    2. add search route(step 11)
    3. show search result in home(12)
    4. gererate search component(step 13)
        1. add to home component
        2. add css
        3. add html
        4. add ts(step 15)
8. Food page(step 16)
  1. add method to food service(step 16)
  2. generate food page component(step 17)
    1. add route(step 18)
    2. add ts (step 18)
    3. add html
    4. add css
9. Tags Bar(step 19)
  1. Create Tag model
  2. add sample tags to data.ts
  3. food service(step 20)
    1. add get all tags method
    2. add get all foods by tag method
  4. add tags route(step 21)
  5. show tag result in home components(step 22)
  6. generate tag component
    1. add to home component
    2. add ts
    3. add html
    4. add css
10. cart page
  1. create cart item model
  2. creat cart model
  3. generate cart service(step 24)
  4. add to cart button in food page(step 25)
  5. generate cart page components(step 26)
    1. add route
    2. add ts(step 27)
    3. add html
    4. add css
extra add some parent child communication and header badge will make dynacmic


11. notfound(step 28)
  1. generate component
    1. add html
    2. add css
    3. add ts
  2. add to pages
    1. home page(29)
    2. food page(30)
    3. cart page(31)
12. connect to backend(step 32)
  1. create backend folder
  2. npm init
  3. npm init typescript
  4. create tsconfig.json
  5. create .gitignore
  6. copy data.ts to backend src
  7. npm i express cors
  8. create server.ts
    1. install @types
    2. add api
    3. npm i ts-node --save-dev
  9. npm i nodemon ts-node --save-dev
  10. add urls.ts to front end(step 33)
  11. add http client module(step:34)
  12. update food.service(step 35)
13. Login Page
  1. generate component(step 36)
   1. add to routes(step 37)
   2. add ts(step 38)
   3. add html(step 39)
    1. import reactive form module
   4. add css
  2. add login api(step 41)
    1. use json(step 42)
    2. add json webtoken (step 43)
    3. test using post man
  
  3. Generate userService(step 44)
    1. generate user model(step 45)
    2. add user subject(step 46)
    3. add login method(step 47)
      1. add user Urls(step 48)
      2. Generate IUserLogin interface(step 49)
      3. add ngx-toaster(step 50)
        1. import module(step 51)
        2. import browser anitmation module(step 52)
        3. add style in angular.json(step 53)
      4. add to header
    
    1. add Local storaage methods(step 55)
    2. add logout method(step 57)
      1. add to header

14. make components for login page
  1. input container(step 58)
  2. input validation(step 59)
  3. text input(step 60)
  4. default button(step 61)

15. connect Login API To MongoDB Atlas
  1. Moving Apis into routers(step: 62)
  2. create mongoDB atlas(step 63)
  3. create .env file(64)
  4. install (65)
    1. mongoose
    2. dotenv
    3. bcrypt js
    4. jsonwebtoken
    5. express async handler
  5. connect to mongoose atlas(66)
  6. use mongoDB instead of data.ts in apis(67)

16. Register api
  1. add register Api(68)
  2. add register service method
  create interface
  3. add register link
  4. add register component 

17. Loading
  1. add image
  2. add component loading component
  3. add service service component
  4. add interceptor(70)

18. Checkout Page
  1. Create Order Model
  2. Create checkout Page Component
    1. Add To Router
  3. Add user to user service
  4. Add cart to Cart service
  5. Create Order items list component
  6. adding map to the check page
      1. add leflet npm package
        1. add @types/leflet  // npm install --save-dev @types/leaflet
        2. add css to angular.json
      2. add addressLatLng to order Model here add model one more field ( addressLatLng)
      3. create map compnent
        1. add to checkout page
        2. add ts
          1. change app-map seletor to map
        3. add html
        4. add css
      4. add auth guard
      
19. Save Order
  1. add order model
  2. add order status Enum ...
  3. add auth middleware...
  4. add order Router...
    1. create api...
  5. add order urls to urls.ts....
  6. add order service...
    1. add create method.............
  7. add auth interceptor
  ng g interceptor auth/auth

20. payment Page
  1. Generate Component
  2. add 'getOrderForCurrentUser' api (75)...
  3. add order service method
  4. connect component to service
  5. make the map component read only
21. adding paypal
  1. generate component
    1. add to payment page
  2. get paypal client id
  3. add payal JS to index.html
  4. set up paypal button
  5. add pay api to order router
  6. get paypal sandbox account
22. order track
 1. generate component
  1. add routes
2. add api
  1. add to url.ts
3. add method to order.service
4. add html
5. add css
    













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



//////////////////////////////////////////////////////////
step :10 
## add method to food service
.........

set up service to take value from data.ts
 getAllFoodBySearchTerm(searchTerm:string):Observable<Food[]>{
    return this.getAll().pipe(
      map((foods:Food[])=>
      foods.filter((food:Food)=>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      )
    )
}

step :11
4.39
.........................................................
## add search route

take approuting module
{path: 'search/:searchTerm', component: HomeComponent }
we dont have set home componet route here so set that
{path:'', component: HomeComponent}
then remove app module already declared some path like 
globally declared (<app-root></app-root>)


step :12
10.13
.........................................................
## show search result in HomeComponent

go to HomeComponent.ts 
initialise value for constructor for activate route
private activatedRoute:ActivatedRoute

- then we check that any have changes in that route  
  activatedRoute.params.subscribe((params)=>{
    // check activate.params using subscribe method so here get any value get params.searchTerm 
    here we are using params.serachTerm reason that using routingModule example({path:'search/:searchTerm', component:HomeComponent})
      if(params.searchTerm){
        this.FoodService.getAllFoodBySearchTerm(params.searchTerm).subscribe((data:Food[])=>{
          console.log("search",data)
          this.foods = data
        })
      }else{
        this.FoodService.getAll().subscribe((data:Food[])=>{
          console.log("working");
          this.foods = data
        })
      }
    })

    some times params.searchitems is error so goto tsconfig.json maybe it   "noPropertyAccessFromIndexSignature": true, change to false



step: 13
10.59
...............................................................................................................................................
## gererate serch component

create new component
//ng g c components/partials/search

step: 14
.............................................................
add search component in homecomponent to
<app-search></app-search>

step: 15
...........................................................
add logic in SearchComponent.ts file

add constructor 
private router :Router
private activatedRoute :ActivatedRoute
then declare
searchTerm!:string;

 activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm){
        this.searchTerm = params.searchTerm
      }
    })

    and after ngOnInit
    add 
     search(term:string):void{
    if(term){
      this.router.navigateByUrl('/search/'+term)
    }
  }

then add html 
<div>
    <input #s type="text" name="" placeholder="search your favourite food...."
    (keyup.enter)="search(s.value)"
    [value]="searchTerm"
    />
    <button (click)="search(s.value)">Search</button>
</div>

here key (keyup.enter)="search(s.value)" it will show when search value then click enter search work without press button

and add css style 
div{
    display: flex;
    justify-content: center;
    margin-top: 3rem;
    margin-bottom: 1.5rem;
}
input{
    border-radius: 10rem 0 0 10rem;
    border: none;
    height: 3rem;
    width: 20rem;
    background-color: #f1f1f1;
    padding: 1.2rem;
    font-size: 1rem;
    font-weight: 500;
    outline: none;
}
div button{
    color: gray;
    height: 3rem;
    width: 5rem;
    font-size: 1rem;
    border-radius: 0 10rem 10rem 0;
    border: none;
    background-color: #e72929;
    color: white;
    opacity: 0.8;
    outline: none;
}
div button:hover{
    opacity: 1;
    cursor: pointer;
}
/////////////////////////////////////////////////////////////////////////////////////

8.Food page step:16
## add method to food service
add service folder to take usique food by list when user touch
getFoodById(foodId:string):Observable<Food | undefined>{
  return this.getAll().pipe(
    map((foods:Food[])=>
    foods.find((food:Food)=> food.id === foodId))
  ) ?? new Food()
}


step :17
11.44
.............................................................................
## generate food page component

generate component
// ng g c components/pages/food-page

step :18
..................................................................
## add route

{path:'food/:if', components:FoodPageComponent}
{path: 'food/:id', component:FoodPageComponent}

step: 18
......................................................................
## add ts 
add construct
private activatedRoute:ActivatedRoute, 
private foodService: FoodService
here we list data when click select by id
 activatedRoute.params.subscribe((params)=>{
      if(params.id){
        this.foodService.getFoodById(params.id).subscribe((data:Food | undefined)=>{
          if(data){
            this.food = data
          }
        })
      }
    })



then next add html to list data
 <div class="container">
    <img [src]="food.imageUrl" [alt]="food.name"/>
  
    <div class="details">
      <div class="header">
        <span class="name">
          {{food.name}}
        </span>
        <span class="favorite {{food.favorite? '': 'not'}}">❤</span>
      </div>
      <!-- <div class="rating">
        <star-rating
        [value]="food.stars"
        [totalstars]="5"
        checkedcolor="red"
        uncheckedcolor="black"
        size="25px"
        [readonly]="true">
      </star-rating>
      </div> -->
  
      <div class="origins">
        <span *ngFor="let origin of food.origins">
          {{origin}}
        </span>
      </div>
  
      <div class="tags">
        <a *ngFor="let tag of food.tags" routerLink="/tag/{{tag}}">
          {{tag}}
        </a>
      </div>
  
      <div class="cook-time">
        <span>
          Time to cook about <strong>{{food.cookTime}}</strong> minutes
        </span>
      </div>
  
      <div class="price">
        <span>
          {{food.price | currency}}
        </span>
      </div>
  
      <button>Add To Cart</button>
  
    </div>
  </div>
then css

.container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin: 1rem;
  }
  
  .container > *{
    min-width: 35rem;
    max-width: 25rem;
  }
  
  img{
    border-radius: 3rem;
    flex: 1 0;
    object-fit: cover;
    height: 30rem;
    margin: 1rem;
  }
  
  .details{
    width: 100%;
    display: flex;
    flex-direction: column;
    flex:1 0;
    padding: 2rem;
    color: black;
    margin-left: 1rem;
  }
  
  .header{
    display: flex;
    justify-content: space-between;
  }
  
  .name{
    font-size: 2rem;
    font-weight: bold;
  }
  
  .favorite{
    color: #e72929;
    font-size: 2.5rem;
  }
  
  .favorite.not{
    color: grey;
  }
  
  .origins{
    display: flex;
    flex-wrap: wrap;
    margin: 1rem 0;
  }
  
  .origins span{
    padding: 0.5rem;
    font-size: 1.2rem;
    margin: 0.5rem 0.5rem 0.5rem 0;
    border-radius: 2rem;
    background-color: aliceblue;
  }
  
  .tags{
    display: flex;
    flex-wrap: wrap;
  }
  
  .tags a{
    background-color: #f0f0f0;
    padding: 0.3rem 1rem;
    margin: 0.2rem 0.15rem;
    border-radius: 10rem;
    font-weight: 600;
    color: blue;
  }
  
  .cook-time{
    margin-top: 1rem;
  }
  
  .cook-time span{
    padding: 0.6rem 2rem 0.6rem 0;
    border-radius: 10rem;
    font-size: 1.3rem;
  }
  
  .price{
    font-size: 1.8rem;
    margin: 2rem 2rem 2rem 0;
    color: green;
  }
  
  .price::before{
    content: "Price: ";
    color: darkgrey;
  }
  
  button{
    color: white;
    background: #e72929;
    border: none;
    font-size: 1.2rem;
    padding: 1rem;
    border-radius: 10rem;
    outline: none;
  }
  
  button:hover{
    opacity: 0.9;
    cursor: pointer;
  }

///////////////////////////////////////////////////////////////////////////////////////

9. Tags Bar(step 19)
##  Create Tag model
take src/app/shared/models/tag.ts
and create model 
## Create Tag model
export const Tag{
  name!:string;
  count!number;
}

## add sample tags to data.ts
export const sample_tags:Tag[] = [
  { name: 'All', count: 6 },
  { name: 'FastFood', count: 4 },
  { name: 'Pizza', count: 2 },
  { name: 'Lunch', count: 3 },
  { name: 'SlowFood', count: 2 },
  { name: 'Hamburger', count: 1 },
  { name: 'Fry', count: 1 },
  { name: 'Soup', count: 1 },
]

step :20
.........................................................................
##  food service
setup a function for retrieving data for database
getAllTags():Observable<Tag[]>{
  return of(sample_tags)
}

## add get all foods by tag method

getAllFoodsByTag(tag:string):Observable<Food[]>{

  if(tag === "All"){
   return this.getAll();
  }else{
    return this.getAll().pipe(
      map((Foods:Food[])=>
      Foods.filter((food:Food)=>
      food.tags?.includes(tag)
      ))
    )
  }
  
  }

step 21
.................................................................
add tags route

app.routing.module.ts
Setup path
  {path: 'tag/:tag', component: HomeComponent}


step 22
.......................................................................
  ## show tag result in home components else if() is added tag

take HomeComponent.ts
constructor(private FoodService: FoodService, private activatedRoute: ActivatedRoute){
    activatedRoute.params.subscribe((params)=>{
      if(params.searchTerm){
        this.FoodService.getAllFoodBySearchTerm(params.searchTerm).subscribe((data:Food[])=>{
          console.log("search",data)
          this.foods = data
        })
      }else if(params.tag){
        this.FoodService.getAllFoodsByTag(params.tag).subscribe((data:Food[])=>{
          this.foods = data
          console.log("tag food",data);
          
        })
      }else{
        this.FoodService.getAll().subscribe((data:Food[])=>{
          console.log("working");
          this.foods = data
        })
      }
    })
  }

.........................................................................................

step 23
## generate tag component
create new component

ng g c components/partials/tags

- add to home component that file 
<app-tag></app-tag>
 
 ## add ts
  tags?:Tag[];
  constructor(private foodservice: FoodService){
    foodservice.getAllTags().subscribe((data:Tag[])=>{
      this.tags = data
    })
  }

  ## add html
  <div *ngIf="tags">
    <a *ngFor="let tag of tags" routerLink="/tag/{{tag.name}}">
      {{tag.name}}({{tag.count}})
    </a>
  </div>

  ## add css
  div{
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

div a{
  background-color: #f0f0f0;
  padding: 0.3rem 1rem;
  margin: 0.2rem 0.15rem;
  border-radius: 10rem;
  font-weight: 600;
  color: blue;
}

/////////////////////////////////////////////////////////////////////////////
10. cart page

step:24
....................................
##   create cart item model
app/shared/models/cartItem.ts

import { Food } from "./Food";


export class CartItem{
    constructor(public food:Food){}
    quantity:number = 1
    price:number = this.food.price
}

## creat cart model
app/shared/models/Cart.ts
import { CartItem } from "./cartItem";

export class Cart{
    items:CartItem[] = []
    totalPrice:number = 0
    totalCount:number = 0
}

................................................................

step:24
## generate cart service
create serice folder for cart
// ng g s srvice/cart
 
 then that service we import some some functionality like add to cart and remove from cart

 add to cart

 crate private service
old one <!-- private cart:Cart = new Cart() -->
 private cart:Cart = this.getFromLocalStorage() because we already set that new Cart()
private cartSubject:BehaviorSubject<Cart> = new BehaviorSubject(this.cart)

the add to cart

  addToCart(food:Food):void{
    let cartItem = this.cart.items.find(item=> item.food.id === food.id)
    if(cartItem){
      return
    }else{
      this.cart.items.push(new CartItem(food))
    }
  }


  and then add remove from cart

  removeFromCart(foodId:string):void{
    this.cart.items = this.cart.items.filter(item=> item.food.id !== foodId )
  }

then next we add change quantity
changeQuantity(foodId:string, quantity:number){
    let cartItem = this.cart.items.find(item=> item.food.id === foodId)
    if(!cartItem){
      return
    }else{
      cartItem.quantity =quantity
     cartItem.price = cartItem.food.price*quantity
    }
  }

  then next one is  add clear cart and getObservable
   clearCart(){
    this.cart = new Cart()
  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

set to local storage because when the page is reloaded the item may be lost
private setCartToLocalStorage():void{
  this.cart.totalPrice = this.cart.items.reduce((acc,cur)=> acc+cur.price,0)
  this.cart.totalCount = this.cart.items.reduce((acc,cur)=> acc+cur.quantity,0)

  const cartJson = JSON.stringify(this.cart);
  localStorage.setItem('Cart',cartJson)
  this.cartSubject.next(this.cart)
}

get item form local storage initially declare
private getCartFromLocalStorage(){
  const cartJson = localStorage.getItem('Cart')
  return cartJson? JSON.parse(cartJson): new Cart()
}

then we add to this
this.setCartToLocalStorage();

for function inside addToCart() ,removeFromCart(),changeQuantity(),clearCart()
because when function will invoking after adding new item adding the cart value will change




step :25
................................................................................
## add to cart button in food page

goto src/app/components/pages/food-page/food-page.components.ts

create
private router : Router used to when user press addTocart redirect to another page
private cartService: CartService

addToCart(){
  this.cartService.addToCart(this.food)
  this.router.navigateByUrl('/cart-page')
}

then it will added in html page
      <button (click)="addToCart()">Add To Cart</button>
 

step:26
..................................................................................
## generate cart page components
create cart-page

//ng g c components/pages/cart-page
## add route
............................................................................................
then set path app routing module
{path:'cart-page', component:CartPageComponent}
then check it will works properly

step 27
..........................................................................................
## add ts
private cartService: CartService


inside constructor we add
cart!:Cart
constructor(private cartService: CartService){
    this.cartService.getCartObservable().subscribe((data)=>{
      this.cart = data
    })
  }

then add remove cart
removeFromCart(cartItem:CartItem){
    this.cartService.removeItems(cartItem.food.id)
  }

  html page and css added 

  after craeting app-title page
  <app-title title="Cart Page" margin='1.5 rem 0 0 2.5rem'></app-title>
  add html
  <h1 [ngStyle]="{margin:margin, fontSize: fontSize}">{{title}}</h1>
  add ts
  @input()
  title!:string

  @input()
  margin? = '1rem 0 1rem 0.2 rem';

  @input()
  fontSize?='1.5rem'

  add css 
  color:'#616161

now we go to change header value change
so src/app/partials/header
cartQuantity=0
 cartQuantity:number=0
  constructor(private cartService: CartService){
    this.cartService.getCartObservable().subscribe((newCart)=>{
      this.cartQuantity = newCart.totalCount
    })
  }


  html page we already declare a badge
  Cart <span *ngIf="cartQuantity">{{cartQuantity}}</span>

//////////////////////////////////////////////////////////////////////////////////////////////////

step:28
.................................................................................
generate not found page

// ng g c components/partials/not-found.ts

first declare four input
@Input()
visible:Boolean=false

@Input()
notFoundMessage="Nothing Found"

@Input()
resetLinkText="Reset"

@Input()
resetLinkRoute="/"

lets go html
add html

and add css


step 29
.........................................................................................
<app-not-found
[visible]="!foods || !foods.length"
resetLinkText="Reset Search"
></app-not-found>


step: 30
..............................................................................................


and finally move to cart page and container tag add
<app-not-found [visible]="!cart || !cart.items.length"
notFoundMessage="cart Page is empty"
resetLinkText="Go to Home Page"
></app-not-found>
<div class="container" *ngIf="!cart || cart.items.length">





step: 31
..............................................................................................
and now next we try to search one product but it will already deleted from web site here show not found or <app-not-found>

so 
<app-not-found
  [visible]="!food?.id"
  notFoundMessage="Food Not Found"
  resetLinkText="Back To Homepage">;
</app-not-found>
<div class="container" *ngIf="food?.id">

//////////////////////////////////////////////////////////////////////////////////////////
step:32
............................................................................................
## backend configurations
11. connect to backend
  1. create backend folder
  2.// npm init
  3.// npm init typescript
  4. create tsconfig.json
  {
    "compilerOptions": {
      "module": "CommonJS",
      "moduleResolution": "node",
      "strict": true,
      "outDir": "./built",
      "experimentalDecorators": true,
      "emitDecoratorMetadata": true,
      "esModuleInterop": true
    },
    "include": ["src/**/*"],
}
  5. create .gitignore
  6. copy data.ts to backend src
  7. npm i express cors
  8. create server.ts
    1. install @types
    2. add api
    3. npm i ts-node --save-dev
  9. npm i nodemon ts-node --save-dev


step:33
............................................................................................
## add urs.ts to front end
create folder
frontend/src/app/shared
create constants/urls.ts

in these folder added constant api's
const BASE_URL = "http://localhost:3000"

export const FOODS_URL = BASE_URL+'/api/foods';

export const FOODS_TAGS_URL = FOODS_URL+'/tags';

export const FOOD_BY_SEARCH_URL = FOODS_URL+'/search/';

export const FOODS_TAG_URL = FOODS_URL+'/tag/';

export const FOOD_BY_ID_URL = FOODS_URL+'/';



step:34
............................................................................................
## add http client module
import HttpClientModule in front end app.module.ts


12.28
step:35
............................................................................................
## update food.service

## getAll()
 getAll():Observable<Food[]>{
   return of(sample_foods)
  }

  // replace

getAll():Observable<Food[]>{
    return this.http.get<Food[]>(FOODS_URL)  
  }


## getAllFoodBySearchTerm()
   getAllFoodBySearchTerm(searchTerm:string):Observable<Food[]>{
    return this.getAll().pipe(
      map((foods:Food[])=>
      foods.filter((food:Food)=>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      )
    )
}

//////replace////////////////////

 getAllFoodBySearchTerm(searchTerm:string):Observable<Food[]>{
    return this.http.get<Food[]>(FOOD_BY_SEARCH_URL+searchTerm)
}


## getFoodById() 

getFoodById(foodId:string):Observable<Food | undefined>{
  return this.getAll().pipe(
    map((foods:Food[])=>
    foods.find((food:Food)=> food.id === foodId))
  ) ?? new Food()
}

/////////replace//////////////

getFoodById(foodId:string):Observable<Food | undefined>{
  return this.http.get<Food>(FOOD_BY_ID_URL+foodId)
}

## getAllTag()
getAllTags():Observable<Tag[]>{
  return of(sample_tags)
}

///////replace/////////////

getAllTags():Observable<Tag[]>{
  return this.http.get<Tag[]>(FOODS_TAGS_URL)
}


## getAllFoodByTag()

getAllFoodsByTag(tag:string):Observable<Food[]>{

  if(tag === "All"){
   return this.getAll();
  }else{
    return this.getAll().pipe(
      map((Foods:Food[])=>
      Foods.filter((food:Food)=>
      food.tags?.includes(tag)
      ))
    )
  }
  
  }

  /////////////////replace//////////

  getAllFoodsByTag(tag:string):Observable<Food[]>{

  if(tag === "All"){
   return this.getAll();
  }else{
    return this.http.get<Food[]>(FOODS_TAG_URL+tag)
  }
  
  }




//////////////////////////////////////////////////////////////////////////////////////////////


step :36
..........................................................................................
## generate component
// ng g c components/pages/login-page

step :37
..........................................................................................
## add to routes
{path:'login', Component:LoginPageComponent}


step :38
..........................................................................................
## add ts
 first :
 import reactiveFormsModule
 loginForm!:FormGroup
isSubmitted:Boolean= false

 second :
 create form group,formbuilder
 constructor(private fb :FormBuilder){}
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required,Validators.pattern]]
    })
  }

  third:
   get fc(){
    return this.loginForm.controls
  }

  submit(){
    this.isSubmitted = true
    if(this.loginForm.invalid) return;
    
    alert(`email: ${this.fc.email.value} ,
    password: ${this.fc.password.value}`)
  }


step :39
..........................................................................................
##  add html

<div class="container">
<div class="details">
    <app-title title="Login"></app-title>

    <form [formGroup]="loginForm" (ngSubmit)="submit()">
        <div class="input-container">
            <label for="">Email</label>
            <div>
                <input type="email" placeholder="Example@gmail.com" formControlName="email">
            </div>
        </div>
        <div class="input-container">
            <label for="">Password</label>
            <div>
                <input type="password" placeholder="Password" formControlName="password">
            </div>
        </div>
        <div class="button">
            <button type="submit">Login</button>
        </div>
    </form>
</div>
</div>

next here add some validation error showing
  <div class="input-container">
            <label for="">Email</label>
            <div>
                <input type="email" placeholder="Example@gmail.com" formControlName="email">
            </div>
            <div class="error-list" *ngIf="fc.email.errors && isSubmitted">
                <div *ngIf="fc.email.errors.required">Should not be empty</div>
                <div *ngIf="fc.email.errors.email">Email is not correct</div>
            </div>
        </div>
        <div class="input-container">
            <label for="">Password</label>
            <div>
                <input type="password" placeholder="Password" formControlName="password">
            </div>
            <div class="error-list" *ngIf="fc.password.errors && isSubmitted">
                <div *ngIf="fc.password.errors.required">Should not be empty</div>
            </div>
        </div>

step :40
..........................................................................................
## add css

  <div class="input-container">
            <label for="">Email</label>
            <div>
                <input type="email" placeholder="Example@gmail.com" formControlName="email">
            </div>
            <div class="error-list" *ngIf="fc.email.errors && isSubmitted">
                <div *ngIf="fc.email.errors.required">Should not be empty</div>
                <div *ngIf="fc.email.errors.email">Email is not correct</div>
            </div>
        </div>
        <div class="input-container">
            <label for="">Password</label>
            <div>
                <input type="password" placeholder="Password" formControlName="password">
            </div>
            <div class="error-list" *ngIf="fc.password.errors && isSubmitted">
                <div *ngIf="fc.password.errors.required">Should not be empty</div>
            </div>
        </div>


step :41
..........................................................................................
## add login api
app.post("/api/users/login",(req,res)=>{
  const {email, password} = req.body
  const user = sample_users.find((data)=> data.email === email && data.password === password)
})





step :42
..........................................................................................
## use json
npm i jsonwebtoken
and import

const generateTokenResponse = (user:any)=>{
  const token = jwt.sign({
    email: user.email, isAdmin:user.isAdmin
  },"SomeRandomeText",{
    expiresIn:"30d"
  })
  user.token = token
  return user
}


step :43
..........................................................................................
##add json webtoken

app.post("/api/users/login",(req,res)=>{
  const {email, password} = req.body
  const user = sample_users.find((data)=> data.email === email && data.password === password)

  if(user){
    res.send(generateTokenResponse(user))
  }else{
    res.status(400).send("user name or password invalid")
  }
})


step :44
..........................................................................................
## Generate userService
// ng g s service/user


step :45
..........................................................................................
## generate user model
src/app/shared/models/User.ts
export class User{
    id!:string;
    email!:string;
    name!:string;
    address!:string;
    token!:string;
    isAdmin!:boolean;
}


step :46
..........................................................................................
## add user subject

go to user service
private userSubject = new BehaviorSubject<User>(new User())
public userObservable!:Observable<User>
  constructor(private http : HttpClient) { 
    this.userObservable = this.userSubject.asObservable()
   }

step :47
..........................................................................................
## add login method
login(userLogin:IUserLogin):Observable<User>{
 return this.http.post<User>(USER_LOGIN_URL,userLogin).pipe(
  tap({
    next:(user)=>{

    },
    error:(errorResponse)=>{
      
    }
  })
 )
}


step :48
..........................................................................................
## add user Urls

export const USER_LOGIN_URL = BASE_URL+'/api/users/login'



step :49
..........................................................................................
## Generate IUserLogin interface
app/shared/interface/IUser.ts
first:
create interface IUser
export interface IUserLogin{
    email:string;
    password:string;
}



step :50
..........................................................................................
## add ngx-toaster
install 
// npm install ngx-toastr

step :51
..........................................................................................
import module()
app.module
import { ToastrModule } from 'ngx-toastr';



step :52
..........................................................................................
## import browser anitmation module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations

step :53
..........................................................................................
## add style in angular.json
move to angular.json
and insert
"styles": [
              "src/styles.css",
            ],

 "node_modules/ngx-toastr/toastr.css"

 finally
 "styles": [
              "src/styles.css",
              "node_modules/ngx-toastr/toastr.css"
            ],


then agian start user service  ......(
  import toastrService: toastrService
  login(userLogin:IUserLogin):Observable<User>{
 return this.http.post<User>(USER_LOGIN_URL,userLogin).pipe(
  tap({
    <!-- next:(user)=>{ 
       this.userSubject.next(user);
      this.toastrService.success(
        `welcome to foodStore ${user.name}!`,
        'login succesfull'
      )
     },
     error:(errorResponse)=>{
      this.toastrService.error(errorResponse.error, 'Login Failed')
    }
  }) -->
 )
}  
)

then using toast for
import for app.module.ts
 ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-bottom-right',
      newestOnTop:false
    })


    then go to login page.ts
here inserting  this.userService.login({email: this.fc.email.value,
      password: this.fc.password.value}).subscribe(()=>{
        this.router.navigateByUrl(this.returnUrl)
      })

    submit(){
    this.isSubmitted = true
    if(this.loginForm.invalid){
      return;
    }else{
      this.userService.login({email: this.fc.email.value,
      password: this.fc.password.value}).subscribe(()=>{
        this.router.navigateByUrl(this.returnUrl)
      })
    }
    
  }

step :54
..........................................................................................
step :55
..........................................................................................
## add Local storaage methods
user.service.ts
declare user key for storing word that
const USER_KEY = 'User'


private setUserToLocalStorage(user:User){
  localStorage.setItem(USER_KEY,JSON.stringify(user))
}
private getUserToLocalStorage():User{
  const userJson = localStorage.getItem(USER_KEY)
  if(userJson){
    return JSON.parse(userJson) as User
  }else{
    return new User()
  }


then set local storage(user Login)
      this.setUserToLocalStorage(user)



step :56
..........................................................................................
change dynamic name in header
declare user!:User

and insert user data
userService.userObservable.subscribe((user)=>{
        this.user = user
    })

    and set html page user,\.name



step :57
..........................................................................................
## add logout method
first user is login
dont show login button in header

<li *ngIf="!user.token"><a routerLink="/login">Login</a></li><li class="menu-container">
                <a routerLink="/dashboard">{{user.name}}</a>


next step:
userService.ts
logout(){
  this.userSubject.next(new User())
  localStorage.removeItem(USER_KEY)
  window.location.reload();
}

header.ts files
 logout(){
    this.userService.logout()
  }

step :58
..........................................................................................
##  make components for login page
## input container

// ng g c components/partials/input-container

goto
input-container.ts
input()
label!:string
input()
bgcolor='white'

input-container.html
<div class="container" [ngStyle]="{'background-color:bgColor'}">
<label for="">{{label}}</label>
<div class="content">
    <ng-content></ng-content>
</div>
</div>

goto home page 

<input-container label="Email">
        <input type="email" placeholder="Example@gmail.com" formControlName="email">
        <div class="error-list" *ngIf="fc.email.errors && isSubmitted">
            <div *ngIf="fc.email.errors.required">Should not be empty</div>
            <div *ngIf="fc.email.errors.email">Email is not correct</div>
        </div>
        </input-container>


step :59
..........................................................................................
## input validation
// ng g c components/partials/input-validation
go to ts file
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATORS_MESSAGES:any={
  required:'should not be empty',
  email:'Email is not valid'
}

@Component({
  selector: 'input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.css']
})


export class InputValidationComponent implements OnInit{
@Input()
control!:AbstractControl;
@Input()
showErrorsWhen:boolean=true;
errorMessages:string[]=[]

checkValidation(){
  const errors = this.control.errors
  if(!errors){
    this.errorMessages = []
    return
  }else{
    const errorKeys = Object.keys(errors)
    this.errorMessages = errorKeys.map(key=> VALIDATORS_MESSAGES[key])
  }
}

ngOnInit(): void {
  this.control.statusChanges.subscribe(()=>{
    this.checkValidation()
  })
  this.control.valueChanges.subscribe(()=>{
    this.checkValidation()
  })
  
}
ngOnChanges(changes: SimpleChanges):void{
  this.checkValidation();
}
}

then this value take from login pages and paste to validator.html
 <div class="error-list" *ngIf="fc.email.errors && isSubmitted">
            <div *ngIf="fc.email.errors.required">Should not be empty</div>
            <div *ngIf="fc.email.errors.email">Email is not correct</div>
        </div>

        and it will we can change for 
        <div class="error-list" *ngIf="errorMessages&& showErrorsWhen">
    <div *ngFor="let errorMessage of errorMessages">
        {{errorMessage}}
    </div>
</div>

remove from login page for that value
 <input-container label="Email">
        <input type="email" placeholder="Example@gmail.com" formControlName="email">
        <input-validation
        [control]="fc.email"
        [showErrorsWhen]="isSubmitted"
        >
        </input-validation>
        </input-container>

  add css

step :60
..........................................................................................
## text input

all text message show another components
//ng g c components/partials/text-input
inputtext.tsexport class TextInputComponent {
  @Input()
  control!:AbstractControl
  @Input()
  showErrorsWhen:boolean = true;
  @Input()
  label!:string
  @Input()
  type :'text'| 'password' | 'email' = 'text'

  get formControl(){
    return this.control as FormControl
  }

}

text-input.html 
<input-container [label]="label">
        <input [type]="type" [placeholder]="label" [formControl]="formControl">
        <input-validation
        [control]="control"
        [showErrorsWhen]="showErrorsWhen"
        >
        </input-validation>
        </input-container>


        add css

        input {
    width: 100%;
    height: 100%;
    border: none;
    border-bottom: 0 solid grey;
    transition: border-bottom 0.15s ease-out;
    background-color: white;
    font-size: 1.1rem;
    outline: none;
  }
  
  input::placeholder{
    color: #dfdfdf;
    font-size: 0.95rem;
  }
  
  input:focus{
  border-width: 2.9px;
  }
  
  input-validation{
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  right: 1rem;
  height: 100%;
  width: 12rem;
  }

now email we are change so next password also change

old 
 <div class="input-container">
            <label for="">Password</label>
            <div>
                <input type="password" placeholder="Password" formControlName="password">
            </div>
            <div class="error-list" *ngIf="fc.password.errors && isSubmitted">
                <div *ngIf="fc.password.errors.required">Should not be empty</div>
            </div>
        </div>


        replced by
  

step :61
..........................................................................................
## default button

// ng g c components/partials/default-button

open ts file

export class DefaultButtonComponent {
@Input()
type: 'submit' | 'button' = 'submit'
@Input()
text:string='Submit'
@Input()
bgColor='#e272929'
@Input()
color='white'
@Input()
fontSizeRem = 1.3
@Input()
widthRem = 12
@Output()
onClick = new EventEmitter()

}


open HTML

<div class="container">
    <button [ngStyle]="{
        color:color,
        'backgroun-color':bgColor,
        'font-size.rem':fontSizeRem,
        'width.rem':widthRem
    }"
    [type]="type"
    (click)="onClick.emit()" >

    </button>
</div>


move to login page
 <div class="button">
            <button type="submit">Login</button>
        </div>


        replace by
        <default-button text="Login"></default-button>

        add css


step :62
..........................................................................................
 ## connect Login API To MongoDB Atlas
## Moving Apis into routers

here changed  some path example erver.ts some api urls changes into routes


step :63
..........................................................................................
## create mongoDB atlas
creat account

step :64
..........................................................................................
## create .env file(64)
MONG_URI = mongodb+srv://vipinm500:zlfNL0weSIz6nYH2@cluster0.0sh1ubd.mongodb.net/foodStore


step :65
..........................................................................................
npm i mongoose dotenv bcryptjs express-async-handler

step :66
..........................................................................................
## connect to mongoose atlas

step :67
..........................................................................................
##   6. use mongoDB instead of data.ts in apis


step :68
..........................................................................................
## add register Api(68)
step :69
..........................................................................................
## add register service method

step :70
..........................................................................................
##   4. add interceptor
here interceptor is using globally loading page declare
// ng g interceptor shared/interceptors/loading

and import app.module.ts
HTTP_INTERCEPTORS,HttpclientModule

and add providers
[{provide:HTTP_INTERCEPTORS, useClass:LoadingInterceptor, multi:true}]

step :71
..........................................................................................
## add leflet npm package
// npm install --save-dev @types/leaflet
step :72
..........................................................................................
## add css to angular.json
Add leaflet.css in angular.json file
 "styles": [
              "src/styles.css",
              "node_modules/ngx-toastr/toastr.css",
              "node_modules/leaflet/dist/leaflet.css"
            ],

step :73
..........................................................................................
## add addressLatLng to order Model here add model one more field
export class Order{
    items!:CartItem[];
    totalPrice!:number;
    name!:string;
    address!:string;
    addressLatLng?:LatLng;
    paymentId!:string;
    createdAt!:string;
    status!:string;
}

/////////////////////////////////////////////////////////////////////////////////////////

step :74
..........................................................................................



step :75
..........................................................................................

 payment Page
 ## Generate Component
 //ng g c components/page/payment-page
set up route
##  add 'getOrderForCurrentUser' api 
step :76
..........................................................................................
step :77
..........................................................................................
step :78
..........................................................................................
step :79
..........................................................................................





debt  card
card no: 4032033298551891
exp: 03/2024
CVC code237

sb-vu5nw27324893@personal.example.com 
g.#0R7Ek



import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/service/cart.service';
import { OrderService } from 'src/app/service/order.service';
import { Order } from 'src/app/shared/models/Order';

declare var paypal:any;
@Component({
  selector: 'paypal-button',
  templateUrl: './paypal-button.component.html',
  styleUrls: ['./paypal-button.component.css']
})
export class PaypalButtonComponent implements OnInit{
  @Input()
  order!:Order;

  @ViewChild('paypal', {static: true})
  paypalElement!:ElementRef;
  constructor(
    private orderService:OrderService,
    private router: Router,
    private toastrService: ToastrService,
    private cartService : CartService
  ){}


  ngOnInit(): void {
    console.log("this",this.order)
    const self = this;
    paypal
    .Buttons({
      createOrder: (data: any, actions: any) => {
        return actions.order.create({
          purchase_units: [
            {
              amount: {
                currency_code: 'CAD',
                value: self.order.totalPrice
              },
            },
          ],
        });
      },

      onApprove: async (data: any, actions: any) => {
        const payment = await actions.order.capture();
        this.order.paymentId = payment.id;
        self.orderService.pay(this.order).subscribe(
          {
            next: (orderId: string) => {
              this.cartService.clearCart();
              this.router.navigateByUrl('/track/' + orderId);
              this.toastrService.success(
                'Payment Saved Successfully',
                'Success'
              );
            },
            error: (error:any) => {
              this.toastrService.error('Payment Save Failed', 'Error');
              console.log(error);
              
            }
          }
        );
      },

      onError: (err: any) => {
        this.toastrService.error('Payment Failed', 'Error');
        console.log(err);
      },
    })
    .render(this.paypalElement.nativeElement);

  }
}


import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.css']
})
export class DefaultButtonComponent {
@Input()
type: 'submit' | 'button' = 'submit'
@Input()
text:string='Submit'
@Input()
bgColor='#e72929'
@Input()
color='white'
@Input()
fontSizeRem = 1.3
@Input()
widthRem = 12
@Output()
onClick = new EventEmitter()

}



<default-button text="Register"></default-button>
        <div class="login">Already User? &nbsp;
            <a routerLink='/login' [queryParams]="{returnUrl: returnUrl}" > Login Here</a>
        </div>










