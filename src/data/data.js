export const menu = [
  {
    id: 1,
    title: "main",
    listItems: [
      {
        id: 1,
        title: "Home",
        url: "/",
        icon: "home.svg",
      },
      {
        id: 2,
        title: "Profile",
        url: "/users/1",
        icon: "user.svg",
      },
    ],
  },
  {
    id: 2,
    title: "lists",
    listItems: [
      {
        id: 1,
        title: "Users",
        url: "/users",
        icon: "user.svg",
      },
      {
        id: 2,
        title: "Products",
        url: "/products",
        icon: "product.svg",
      },
      {
        id: 3,
        title: "Orders",
        url: "/orders",
        icon: "order.svg",
      },
      {
        id: 4,
        title: "Posts",
        url: "/posts",
        icon: "post.svg",
      },
    ],
  },
  {
    id: 3,
    title: "general",
    listItems: [
      {
        id: 1,
        title: "Elements",
        url: "/",
        icon: "element.svg",
      },
      {
        id: 2,
        title: "Notes",
        url: "/",
        icon: "note.svg",
      },
      {
        id: 3,
        title: "Forms",
        url: "/",
        icon: "form.svg",
      },
      {
        id: 4,
        title: "Calendar",
        url: "/",
        icon: "calendar.svg",
      },
    ],
  },
  {
    id: 4,
    title: "Maintenance",
    listItems: [
      {
        id: 1,
        title: "Settings",
        url: "/",
        icon: "setting.svg",
      },
      {
        id: 2,
        title: "Backups",
        url: "/",
        icon: "backup.svg",
      },
    ],
  },
  {
    id: 5,
    title: "analytics",
    listItems: [
      {
        id: 1,
        title: "Charts",
        url: "/",
        icon: "chart.svg",
      },
      {
        id: 2,
        title: "Logs",
        url: "/",
        icon: "log.svg",
      },
    ],
  },
];

export const topDealUsers = [
  {
    id: 1,
    img: "https://images.pexels.com/photos/8405873/pexels-photo-8405873.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load",
    username: "Elva McDonald",
    email: "elva@gmail.com",
    amount: "3.668",
  },
  {
    id: 2,
    img: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Linnie Nelson",
    email: "linnie@gmail.com",
    amount: "3.256",
  },
  {
    id: 3,
    img: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Brent Reeves",
    email: "brent@gmail.com",
    amount: "2.998",
  },
  {
    id: 4,
    img: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Adeline Watson",
    email: "adeline@gmail.com",
    amount: "2.512",
  },
  {
    id: 5,
    img: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Juan Harrington",
    email: "juan@gmail.com",
    amount: "2.134",
  },
  {
    id: 6,
    img: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Augusta McGee",
    email: "augusta@gmail.com",
    amount: "1.932",
  },
  {
    id: 7,
    img: "https://images.pexels.com/photos/874158/pexels-photo-874158.jpeg?auto=compress&cs=tinysrgb&w=1600",
    username: "Angel Thomas",
    email: "angel@gmail.com",
    amount: "1.560",
  },
  {
    id: 8,
    img: "https://picsum.photos/200/300?random=2",
    username: "Mikael Angelo",
    email: "mael@gmail.com",
    amount: "1.560",
  },
  {
    id: 9,
    img: "https://picsum.photos/200/300?random=1",
    username: "Jonas Brother",
    email: "jonas@gmail.com",
    amount: "1.560",
  },
  {
    id: 10,
    img: "https://picsum.photos/200/300?random=3",
    username: "Thomas Edison",
    email: "tom@gmail.com",
    amount: "1.560",
  },
];

export const LineChartTotalUser = {
  color: "#8884d8",
  icon: "./userIcon.svg",
  title: "Total Users",
  number: "11,238",
  dataKey: "users",
  percentage: 45,
  chartData: [
    { name: "Jan", users: 400 },
    { name: "Feb", users: 600 },
    { name: "Mar", users: 500 },
    { name: "Apr", users: 700 },
    { name: "May", users: 450 },
    { name: "Jun", users: 500 },
    { name: "Jul", users: 480 },
  ],
};

export const LineChartTotalRevenue = {
  color: "#dc2626",
  icon: "/revenueIcon.svg",
  title: "Total Revenue",
  number: "$120,000",
  dataKey: "revenue",
  percentage: 20,
  chartData: [
    { name: "Jan", revenue: 15000 },
    { name: "Feb", revenue: 22000 },
    { name: "Mar", revenue: 18000 },
    { name: "Apr", revenue: 25000 },
    { name: "May", revenue: 14000 },
    { name: "Jun", revenue: 18000 },
    { name: "Jul", revenue: 16000 },
  ],
};

export const LineChartTotalProducts = {
  color: "#34d399",
  icon: "/productsIcon.svg",
  title: "Total Products",
  number: "350",
  dataKey: "products",
  percentage: 60,
  chartData: [
    { name: "Jan", products: 50 },
    { name: "Feb", products: 80 },
    { name: "Mar", products: 60 },
    { name: "Apr", products: 90 },
    { name: "May", products: 40 },
    { name: "Jun", products: 60 },
    { name: "Jul", products: 55 },
  ],
};

export const LineChartTotalRatio = {
  color: "#fdcc58",
  icon: "/ratioIcon.svg",
  title: "Total Ratio",
  number: "2.5",
  dataKey: "ratio",
  percentage: 15,
  chartData: [
    { name: "Jan", ratio: 1.8 },
    { name: "Feb", ratio: 2.3 },
    { name: "Mar", ratio: 1.9 },
    { name: "Apr", ratio: 2.6 },
    { name: "May", ratio: 1.5 },
    { name: "Jun", ratio: 1.9 },
    { name: "Jul", ratio: 2.2 },
  ],
};

export const barChartBoxRevenue = {
  title: "Profit Earned",
  color: "#8884d8",
  dataKey: "profit",
  chartData: [
    {
      name: "Sun",
      profit: 4000,
    },
    {
      name: "Mon",
      profit: 3000,
    },
    {
      name: "Tue",
      profit: 2000,
    },
    {
      name: "Wed",
      profit: 2780,
    },
    {
      name: "Thu",
      profit: 1890,
    },
    {
      name: "Fri",
      profit: 2390,
    },
    {
      name: "Sat",
      profit: 3490,
    },
  ],
};

export const barChartBoxVisit = {
  title: "Total Visit",
  color: "#FF8042",
  dataKey: "visit",
  chartData: [
    {
      name: "Sun",
      visit: 4000,
    },
    {
      name: "Mon",
      visit: 3000,
    },
    {
      name: "Tue",
      visit: 2000,
    },
    {
      name: "Wed",
      visit: 2780,
    },
    {
      name: "Thu",
      visit: 1890,
    },
    {
      name: "Fri",
      visit: 2390,
    },
    {
      name: "Sat",
      visit: 3490,
    },
  ],
};
