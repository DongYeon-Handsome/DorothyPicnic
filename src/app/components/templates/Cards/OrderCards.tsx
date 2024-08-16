import Sample1 from "../../../../../public/Image/Sample1.jpg"
import Sample2 from "../../../../../public/Image/Sample2.jpg"

const OrderCards = [
  { 
    id: 1,
    title: 'Order 1',
    description: 'Order Description 1',
    price: '30,000 won',
    imageSrc: Sample1,
    modalButtonText: '주문하기',
    modalButtonClick: () => alert('상품이 주문되었습니다.'),
  },
  {
    id: 2,
    title: 'Picnic 2',
    description: 'Picnic Description 2',
    price: '40,000 won',
    imageSrc: Sample2,
    modalButtonText: '주문하기',
    modalButtonClick: () => alert('주문이 주문되었습니다.'),
  },
];

export default OrderCards;