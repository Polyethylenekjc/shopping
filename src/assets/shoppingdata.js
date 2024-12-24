import { ref } from "vue"

export const shoppingdata = ref()

shoppingdata.value = 
[
    {
        "id": 1,
        "name": "番茄",
        "price": 1.99,
        "pic": "https://ts1.cn.mm.bing.net/th/id/R-C.6c9f3cfb70fac1f2ecbe30288d56520a?rik=uqIf1Q2Zf5Ysvw&riu=http%3a%2f%2fimg02.tooopen.com%2fimages%2f20150408%2ftooopen_sy_84672118932.jpg&ehk=Fv2dkyebFXU0uO5m%2fpod5ocwVLj6c3qr0A3lc4YdcOA%3d&risl=&pid=ImgRaw&r=0",
        "tag": ["veg", "local", "hot"],
        "number": 0
    },
    {
        "id": 2,
        "name": "胡萝卜",
        "price": 1.59,
        "pic": "https://tse2-mm.cn.bing.net/th/id/OIP-C.v5txfOrLxgpNgRr2rXMf3wHaHa?rs=1&pid=ImgDetMain",
        "tag": ["veg", "local"],
        "number": 0
    },
    {
        "id": 3,
        "name": "土豆",
        "price": 0.99,
        "pic": "https://tse3-mm.cn.bing.net/th/id/OIP-C.QbZgXBqlLjnPHN54nz081AHaGS?rs=1&pid=ImgDetMain",
        "tag": ["veg", "local", "hot"],
        "number": 0
    },
    {
        "id": 4,
        "name": "青椒",
        "price": 1.79,
        "pic": "https://tse2-mm.cn.bing.net/th/id/OIP-C.aT8HvROd5YCiInlY_dXT2QHaHa?rs=1&pid=ImgDetMain",
        "tag": ["veg", "local"],
        "number": 0
    },
    {
        "id": 5,
        "name": "西兰花",
        "price": 2.49,
        "pic": "https://pic.nximg.cn/file/20230818/34599220_222625382108_2.jpg",
        "tag": ["veg","hot" ],
        "number": 0
    },
    {
        "id": 6,
        "name": "菠菜",
        "price": 2.09,
        "pic": "https://ts1.cn.mm.bing.net/th/id/R-C.69fb6cb1930f363027cf913d3ac03b16?rik=obUrBlPvhOBcWQ&riu=http%3a%2f%2fpic.ntimg.cn%2ffile%2f20141213%2f19719628_111331802000_2.jpg&ehk=GTKx1oD1p6F%2biaB%2bOdGwg3sUTqIlpWmh0Dl%2bd%2bAYeQg%3d&risl=&pid=ImgRaw&r=0",
        "tag": ["veg","hot" ],
        "number": 0
    },
    {
        "id": 7,
        "name": "大蒜",
        "price": 1.49,
        "pic": "https://ts1.cn.mm.bing.net/th/id/R-C.7dfbc583725d1b9109d806b9675ab95b?rik=L6wl4L0GBzffHg&riu=http%3a%2f%2fpic.baike.soso.com%2fp%2f20140220%2f20140220190247-139644399.jpg&ehk=fLW%2fDruBHmtb1atHi1Ipw1D%2f064arEJeQokSiiTrQPs%3d&risl=&pid=ImgRaw&r=0",
        "tag": ["veg"],
        "number": 0
    },
    {
        "id": 8,
        "name": "洋葱",
        "price": 1.39,
        "pic": "https://img14.360buyimg.com/pop/jfs/t1/166847/28/17757/171574/6073f206E979c0ed0/dfa9dce39a4e30a3.jpg",
        "tag": ["veg"],
        "number": 0
    },
    {
        "id": 9,
        "name": "生菜",
        "price": 2.29,
        "pic": "https://ts1.cn.mm.bing.net/th/id/R-C.3644dd542c2dbaaa63ce842fb4fd2375?rik=L5qMCTWAd9ULWA&riu=http%3a%2f%2fpic.ntimg.cn%2ffile%2f20170702%2f22051501_100041146000_2.jpg&ehk=VpKvoPWjbS1Ly%2b4Q8wYdLaDRkNe9FA9k3HJ9p7W3UyI%3d&risl=&pid=ImgRaw&r=0",
        "tag": ["veg", "local"],
        "number": 0
    },
    {
        "id": 10,
        "name": "茄子",
        "price": 2.19,
        "pic": "https://pic.nximg.cn/file/20230815/34599220_221915679106_2.jpg",
        "tag": ["veg", "local"],
        "number": 0
    },
    {
        "id": 11,
        "name": "猪肉",
        "price": 5.99,
        "pic": "https://imgservice.suning.cn/uimg1/b2c/image/gAkQGo5ZgDB01jqvlbbrNw==.png_800w_800h_4e",
        "tag": ["meat", "pork", "fresh"],
        "number": 0
    },
    {
        "id": 12,
        "name": "牛肉",
        "price": 9.99,
        "pic": "https://pic.nximg.cn/file/20230722/34599220_174126908100_2.jpg",
        "tag": ["meat", "beef", "fresh"],
        "number": 0
    },
    {
        "id": 13,
        "name": "鸡肉",
        "price": 3.99,
        "pic": "https://pic.616pic.com/ys_bnew_img/00/13/92/Zn9ArTs5ZC.jpg",
        "tag": ["meat", "chicken", "fresh"],
        "number": 0
    },
    {
        "id": 14,
        "name": "羊肉",
        "price": 11.99,
        "pic": "https://cbu01.alicdn.com/img/ibank/2020/237/563/14003365732_844809454.jpg",
        "tag": ["meat", "lamb", "fresh"],
        "number": 0
    },
    {
        "id": 15,
        "name": "鸭肉",
        "price": 6.49,
        "pic": "https://cbu01.alicdn.com/img/ibank/O1CN01jcFqpB1SFQq7xCWoa_!!2214195222217-0-cib.jpg",
        "tag": ["meat", "duck", "fresh"],
        "number": 0
    },
    {
        "id": 16,
        "name": "火腿",
        "price": 4.49,
        "pic": "https://img.alicdn.com/imgextra/i2/2631507833/O1CN01kZFmvK27jZDkIlZgz_!!2631507833.jpg",
        "tag": ["meat", "ham", "cooked"],
        "number": 0
    },
    {
        "id": 17,
        "name": "培根",
        "price": 5.49,
        "pic": "https://tse3-mm.cn.bing.net/th/id/OIP-C.rZ8KoRh0WfOxo0OSzoFxAQHaHa?rs=1&pid=ImgDetMain",
        "tag": ["meat", "bacon", "cooked"],
        "number": 0
    },
    {
        "id": 18,
        "name": "香肠",
        "price": 3.79,
        "pic": "https://img.alicdn.com/i2/2213307380245/O1CN01GOH2N51DgFnUhVyru_!!2213307380245.jpg",
        "tag": ["meat", "sausage", "cooked"],
        "number": 0
    },
    {
        "id": 19,
        "name": "牛排",
        "price": 12.99,
        "pic": "https://tse4-mm.cn.bing.net/th/id/OIP-C.kPqpQdF0Iv1-OT13Z1tTogHaHa?rs=1&pid=ImgDetMain",
        "tag": ["meat", "steak", "cooked"],
        "number": 0
    },
    {
        "id": 20,
        "name": "猪蹄",
        "price": 7.29,
        "pic": "https://x0.ifengimg.com/ucms/2022_44/5A763766FD21C601608E6B53F7A73E149404BD3F_size126_w800_h800.jpg",
        "tag": ["meat", "pork", "cooked"],
        "number": 0
    }
]
