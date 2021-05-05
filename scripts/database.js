const database = {
  paintColor: [
    {
      id: 1,
      color: "Silver",
      price: 100.0,
    },
    {
      id: 2,
      color: "Midnight Blue",
      price: 350.0,
    },
    {
      id: 3,
      color: "Firebrick Red",
      price: 200.0,
    },
    {
      id: 4,
      color: "Spring Green",
      price: 500.0,
    },
  ],
  interiorStyle: [
    {
      id: 1,
      style: "Beige Fabric",
      price: 101.0,
    },
    {
      id: 2,
      style: "Charcoal Fabric",
      price: 102.0,
    },
    {
      id: 3,
      style: "White Leather",
      price: 300.0,
    },
    {
      id: 4,
      style: "Black Leather",
      price: 301.0,
    },
  ],
  technology: [
    {
      id: 1,
      package: "Basic Package (basic sound system)",
      price: 500.0,
    },
    {
      id: 2,
      package: "Navigation Package (includes integrated navigation controls)",
      price: 600.0,
    },
    {
      id: 3,
      package: "Visibility Package (includes integrated navigation controls)",
      price: 700.0,
    },
    {
      id: 4,
      package: "Ultra Package (includes navigation and visibility packages)",
      price: 800.0,
    },
  ],
  wheels: [
    {
      id: 1,
      style: "17-inch Pair Radial",
      price: 75.0,
    },
    {
      id: 2,
      style: "17-inch Pair Radial Black",
      price: 95.0,
    },
    {
      id: 3,
      style: "18-inch Pair Spoke Silver",
      price: 115.0,
    },
    {
      id: 4,
      style: "18-inch Pair Spoke Black",
      price: 135.0,
    },
  ],
  customerOrder: [
    // {
    //   id: 1,
    //   interiorStyleId: 2,
    //   paintColorId: 2,
    //   techId: 2,
    //   wheelId: 3,
    //   timestamp: 1614659931693,
    // },
  ],
  orderBuilder: {},
};

export const getTech = () => {
  return [...database.technology];
};
export const getWheels = () => {
  return [...database.wheels];
};
export const getInteriorStyles = () => {
  return [...database.interiorStyle];
};
export const getPaintColor = () => {
  return [...database.paintColor];
};
export const getCustomerOrders = () => {
  return [...database.customerOrder];
};

export const setTech = (id) => {
  database.orderBuilder.techId = id;
};
export const setWheel = (id) => {
  database.orderBuilder.wheelId = id;
};
export const setInteriorStyles = (id) => {
  database.orderBuilder.interiorStyleId = id;
};
export const setPaintColor = (id) => {
  database.orderBuilder.paintColorId = id;
};

export const addCustomerOrder = () => {
  if (
    //in operator returns true if these things are IN FACT in the database.orderBuilder, so if nothing is clicked, will return false
    "interiorStyleId" in database.orderBuilder &&
    "paintColorId" in database.orderBuilder &&
    "techId" in database.orderBuilder &&
    "wheelId" in database.orderBuilder
  ) {
    //This is a ternary condition statement, if not using this, use an elseif statement

    //creates a copy of the empty orderBuild object, and stores the object in a new variable called newOrder
    const newOrder = { ...database.orderBuilder };

    //checking if there is an object with and id greater than 0
    newOrder.id =
      database.customerOrder.length > 0
        ? // -YES?
          // --- Get the id of the last order from the customerOrder array
          // --- Set the newOrder.id equal to that value + 1
          //any objects?
          [...database.customerOrder].pop().id + 1
        : //-NO?
          // --- Set newOrder.id equal to 1
          1;

    //assigning the value of the newOrder.timestamp to the current timestamp
    newOrder.timestamp = Date.now();

    //push the newOrder object to our empty object of orderBuilder

    database.customerOrder.push(newOrder);

    //resetting the temporary state of of the orderBuilder object
    database.orderBuilder = {};

    document.dispatchEvent(new CustomEvent("stateHasChanged"));

    return true;
  }
  return false;
};
