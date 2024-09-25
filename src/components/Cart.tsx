import Image from "next/image";

const Cart = () => {
  const cartItems = true;
  return (
    <div className="absolute rounded-md p-4 shadow-lg bg-white top-12 right-0 flex flex-col gap-6 z-20 w-max">
      {!cartItems ? (
        <div>art is Empty</div>
      ) : (
        <>
        <h2 className="text-xl">Shopping Cart</h2>
          {/* List  */}
          <div className="flex flex-col gap-8">
            {/* Item  */}
            <div className="flex gap-4 ">
              <Image
                src={"https://picsum.photos/200"}
                alt="Cart item Image"
                width={72}
                height={92}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* Top  */}
                <div className="">
                  {/* Title  */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">₦5,655</div>
                  </div>
                  {/* Description  */}
                  <div className="text-sm text-gray-500">available</div>
                </div>

                {/* Bottom  */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty: 5</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
            <div className="flex gap-4 ">
              <Image
                src={"https://picsum.photos/200"}
                alt="Cart item Image"
                width={72}
                height={92}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* Top  */}
                <div className="">
                  {/* Title  */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="p-1 bg-gray-50 rounded-sm">₦5,655</div>
                  </div>
                  {/* Description  */}
                  <div className="text-sm text-gray-500">available</div>
                </div>

                {/* Bottom  */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty: 5</span>
                  <span className="text-blue-500">Remove</span>
                </div>
              </div>
            </div>
          </div>
          {/* Bottom  */}
          <div className="">
            <div className="flex items-center justify-between font-semibold">
              <span>Subtotal:</span>
              <span>₦5,655</span>
            </div>
            <p className="text-gray-500 text-sm mt-2 mb-4">Shipping and taxes calculated at checkout</p>
            <div className="flex justify-between text-sm">
                <button className="rounded-md py-3 px-4 ring-1 ring-gray-300">View Cart</button>
                <button className="rounded-md py-3 px-4 bg-black text-white">Checkout</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
