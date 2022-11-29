const INTIAL_STATE = {
    sections:[{
        title:'hats',
        imageUrl:'https://i.picsum.photos/id/646/2509/1673.jpg?hmac=HXykqhktw0TF08mbS0F3J4bxJJvJRQXG74xA4zPYW7Y',
        id:1,
        linkUrl:'hats'
    },
    {
        title:'jackets',
        imageUrl:'https://i.picsum.photos/id/319/5445/2768.jpg?hmac=oZV0pFhNqKHhhKnqoPwpG3MS68TynWZVdMhaqHZ68x4',
        id:2,
        linkUrl:'jackets'

    },
    {
        title:'sneakers',
        imageUrl:'https://i.picsum.photos/id/103/2592/1936.jpg?hmac=aC1FT3vX9bCVMIT-KXjHLhP6vImAcsyGCH49vVkAjPQ',
        id:3,
        linkUrl:'sneakers'

    },
    {
        title:'womens',
        imageUrl:'https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc',
        size :'large',
        id:4,
        linkUrl:'women'

    },
    {
        title:'mens',
        imageUrl:'https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY',
        size :'large',
        id:5,
        linkUrl:'men'

    },
]
}


const directoryReducer = (state = INTIAL_STATE,action)  =>{

    switch(action.type){

        default:
            return state
    }

}


export default directoryReducer