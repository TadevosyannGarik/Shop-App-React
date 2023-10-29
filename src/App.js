import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Items from "./components/items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {
                    id: 1,
                    title: "Gray Chair",
                    image: "gray-chair.jpg",
                    desc: "A comfortable gray chair for your home or office.",
                    category: "chairs",
                    price: "49.99"
                },
                {
                    id: 2,
                    title: "Red Leather Sofa",
                    image: "red-leather-sofa.jpg",
                    desc: "A stylish red leather sofa that adds elegance to your living room.",
                    category: "sofas",
                    price: "299.99"
                },
                {
                    id: 3,
                    title: "Wooden Coffee Table",
                    image: "wooden-coffee-table.jpg",
                    desc: "A durable wooden coffee table for your home's centerpiece.",
                    category: "tables",
                    price: "79.99"
                },
                {
                    id: 4,
                    title: "Modern Desk Lamp",
                    image: "modern-desk-lamp.jpg",
                    desc: "Illuminate your workspace with this sleek modern desk lamp.",
                    category: "lighting",
                    price: "19.99"
                },
                {
                    id: 5,
                    title: "Blue Velvet Armchair",
                    image: "blue-velvet-armchair.jpg",
                    desc: "Relax in style with this luxurious blue velvet armchair.",
                    category: "chairs",
                    price: "149.99"
                },
                {
                    id: 6,
                    title: "Glass Dining Table",
                    image: "glass-dining-table.jpg",
                    desc: "Elevate your dining experience with this elegant glass dining table.",
                    category: "tables",
                    price: "199.99"
                },
                {
                    id: 7,
                    title: "Rustic Bookshelf",
                    image: "rustic-bookshelf.jpg",
                    desc: "Display your favorite books and decor on this charming rustic bookshelf.",
                    category: "shelves",
                    price: "129.99"
                },
                {
                    id: 8,
                    title: "Black Leather Recliner",
                    image: "black-leather-recliner.jpg",
                    desc: "Sink into comfort with this black leather recliner perfect for movie nights.",
                    category: "chairs",
                    price: "249.99"
                },
                {
                    id: 9,
                    title: "Round Side Table",
                    image: "round-side-table.jpg",
                    desc: "A versatile round side table to complement any room in your home.",
                    category: "tables",
                    price: "59.99"
                },
                {
                    id: 10,
                    title: "Industrial Pendant Light",
                    image: "industrial-pendant-light.jpg",
                    desc: "Add an industrial touch to your space with this pendant light fixture.",
                    category: "lighting",
                    price: "39.99"
                },
                {
                    id: 11,
                    title: "Linen Upholstered Bed",
                    image: "linen-upholstered-bed.jpg",
                    desc: "Sleep in luxury with this linen upholstered bed frame in a neutral color.",
                    category: "beds",
                    price: "349.99"
                },
                {
                    id: 12,
                    title: "White Bar Stools",
                    image: "white-bar-stools.jpg",
                    desc: "Upgrade your kitchen or bar area with these stylish white bar stools.",
                    category: "chairs",
                    price: "79.99"
                },
                {
                    id: 13,
                    title: "Oak Writing Desk",
                    image: "oak-writing-desk.jpg",
                    desc: "Create a productive workspace with this classic oak writing desk.",
                    category: "desks",
                    price: "129.99"
                },
                {
                    id: 14,
                    title: "Outdoor Patio Set",
                    image: "outdoor-patio-set.jpg",
                    desc: "Enjoy the outdoors with this complete patio furniture set, perfect for relaxation.",
                    category: "outdoor furniture",
                    price: "499.99"
                },
                {
                    id: 15,
                    title: "Glass Vase with Flowers",
                    image: "glass-vase-with-flowers.jpg",
                    desc: "Add a touch of nature to your home with this elegant glass vase filled with fresh flowers.",
                    category: "decor",
                    price: "29.99"
                }
            ],
            showFullItem: false,
            fullItem: {}
        }
        this.state.currentItems = this.state.items
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this)
        this.chooseCategory = this.chooseCategory.bind(this)
        this.onShowItem = this.onShowItem.bind(this)
    }

    render() {
        return (
          <div className="wrapper">
            <Header orders={this.state.orders} onDelete={this.deleteOrder} />
            <Categories chooseCategory={this.chooseCategory} />
            <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}  />
            {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem}/>}
            <Footer />
          </div>
        );
      }

    onShowItem(item) {
        this.setState({fullItem: item})
        this.setState({showFullItem: !this.state.showFullItem})
    }

    chooseCategory(category) {
        if(category === "all") 
            {this.setState({currentItems: this.state.items})
            return
        }

        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }

    deleteOrder = (id) => {
        this.setState({
          orders: this.state.orders.filter((el) => el.id !== id),
        });
      };

    addToOrder(item) {
        let isInArray = false
        this.state.orders.forEach(el => {
            if(el.id === item.id)
                isInArray = true
        })

        if (!isInArray)
            this.setState({orders: [...this.state.orders, item]})
    }
}
export default App;
