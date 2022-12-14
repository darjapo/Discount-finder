const posts = [
    {
      'name': 'Title 1',
      'location': 'Caption 1',
      'originalprice': '150€',
      'discountedprice':'100€',
      'picture': 'images/discount1.png',
    },
    {
  
        'name': 'Title 2',
        'location': 'Caption 2',
        'originalprice': '2000€',
        'discountedprice':'10000€',
        'picture': 'images/discount1.png',
    },
    {
        'name': 'Title 3',
        'location': 'Caption 3',
        'originalprice': '100€',
        'discountedprice':'80€',
        'picture': 'images/discount1.png',
    },
]
// select existing html elements
const gallery = document.querySelector('.gallery');

// create gallery cards
const createGalleryCards = (posts) => {
    for (let i = 0; i < posts.length; i++) {
        const div1 = document.createElement('div');
        div1.className = "gallery-item";
        div1.tabIndex = "0";

        const div2 = document.createElement('div');
        div2.className = "gallery-item-icon";
        const ul1 = document.createElement('ul');
        const li1 = document.createElement('li');
        li1.className = "gallery-item-bookmark";
        const a1 = document.createElement('a');
        a1.href = "#edit";
        const i1 = document.createElement('i');
        i1.className = "fas fa-bookmark";

        const img = document.createElement('img');
        img.className = "gallery-image";
        // need to check 
        img.src = posts[i].picutre;
        img.alt = "discount";

        const div3 = document.createElement('div');
        div3.className = "gallery-item-info";

        const div4 = document.createElement('div');
        div4.className = "gallery-item-left";
        const p1 = document.createElement('p');
        p1.className = "gallery-item-product";
        p1.append('ipad');
        const p2 = document.createElement('p');
        p2.className = "gallery-item-location";
        p2.append('Gigantti');

        const div5 = document.createElement('div');
        div5.className = "gallery-item-right";
        const p3 = document.createElement('p');
        p3.className = "gallery-item-originalprice";
        p3.append('€');
        const p4 = document.createElement('p');
        p4.className = "gallery-item-discountedprice";
        p4.append('€');
        

        gallery.appendChild(div1);
        div1.appendChild(div2);
        div2.appendChild(ul1);
        ul1.appendChild(li1);
        li1.appendChild(a1);
        a1.appendChild(i1);
        div1.appendChild(img);
        div1.appendChild(div3);
        div3.appendChild(div4);
        div4.appendChild(p1);
        div4.appendChild(p2);
        div3.appendChild(div5);
        div5.appendChild(p3);
        div5.appendChild(p4);
    }
}
createGalleryCards(posts);

