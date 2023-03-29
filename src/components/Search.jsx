import React from "react";
import {RiCustomerService2Fill} from "react-icons/ri";
import {MdOutlineTravelExplore} from "react-icons/md";

const Search = () => {
    return(
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-4 px-4 py-16">
            <div className="lg:col-span-2 flex flex-col justify-evenly">
                <div>
                    <h2>Luxury Included Vacations for tow people</h2>
                    <p className="py-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                        Architecto sed voluptate doloribus veritatis tenetur 
                        possimus accusamus incidunt consequuntur inventore doloremque. 
                        Quis consequatur quo omnis officia laboriosam consequuntur 
                        tempora itaque culpa rem. Harum sapiente fuga dolores sint 
                        sunt iusto aliquid ratione!
                    </p>
                </div>
                <div className="grid sm:grid-cols-2 gap-8 py-4">
                    <div className="flex flex-col lg:flex-row items-center text-center">
                        <button>
                            <RiCustomerService2Fill size={50} />
                        </button>
                        <div>
                            <h3 className="py-2">Leading Service</h3>
                            <p className="py-1">All-Inclusive Company dor 20 years In-A-Row</p>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row items-center text-center">
                        <button>
                            <MdOutlineTravelExplore size={50} />
                        </button>
                        <div>
                            <h3 className="py-2">Automated Bookings</h3>
                            <p className="py-1">All-Inclusive Company dor 20 years In-A-Row</p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="border text-center">
                    <p className="pt-2">Get An Aditional 10% off</p>
                    <p className="py-4">12 Hours Left</p>
                    <p className="bg-gray-800 text-gray-200 py-2">Book Now and Save</p>
                </div>
                <form className="w-full">
                    <div className="flex flex-col my-2">
                        <label>Destination</label>
                        <select className="border rounded-md p-2">
                            <option>Bangladesh</option>
                            <option>Maldives</option>
                            <option>Dubai</option>
                            <option>Indonesia</option>
                        </select>
                    </div>
                    <div className="flex flex-col my-4">
                        <label>Check-In</label>
                        <input type="date" className="border rounded-md p-2" />
                    </div>
                    <div className="flex flex-col my-2">
                        <label>Check-Out</label>
                        <input type="date" className="border rounded-md p-2" />
                    </div>
                    <button className="w-full my-4">Rates & Availabilities</button>
                </form>
            </div>
        </div>
    )
}

export default Search;