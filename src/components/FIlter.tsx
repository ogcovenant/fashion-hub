import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";

const FIlter = () => {
  return (
    <div className="p-8 w-[25%]">
      <div className="flex justify-between items-center">
        <h3 className="font-medium text-main text-xl">Filters</h3>
        <button className="text-[#726C6CF0] border-[1px] border-[#726C6C60] p-2 px-3 rounded-full">
          Clear All
        </button>
      </div>
      <Accordion type="multiple" className="mt-5">
        <AccordionItem value="category">
          <AccordionTrigger>Category</AccordionTrigger>
          <AccordionContent>
            <div className="flex items-center gap-1 p-3">
              <Checkbox id="men" />
              <label htmlFor="men" className="cursor-pointer">Men</label>
            </div>
            <div className="flex items-center gap-1 p-3">
              <Checkbox id="women" />
              <label htmlFor="women" className="cursor-pointer">Women</label>
            </div>
            <div className="flex items-center gap-1 p-3">
              <Checkbox id="children" />
              <label htmlFor="children" className="cursor-pointer">Children</label>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="price" className="mt-3">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent>
            <div className="flex items-center gap-3">
              <input type="number" className="w-[50%] outline-none border-[1px] border-main rounded-lg p-3"/>
              <p>-</p>
              <input type="number" className="w-[50%] outline-none border-[1px] border-main rounded-lg p-3"/>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FIlter;
