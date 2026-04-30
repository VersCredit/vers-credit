import { CalculatorPageQueryResult } from "@/sanity.types";
import CalculatorCard from "./calculatorCard";
import AdBanner from "@/components/common/adSense/adbanners";

const CalculatorsList = ({
  calculatorsList,
}: {
  calculatorsList: NonNullable<CalculatorPageQueryResult>["calculatorList"];
}) => {
  return (
    <div className="max-width-container padding-container">
      <div className="w-full mb-6">
        <AdBanner slot="5430829843" />
      </div>
      <div>
        {Array.from({ length: Math.ceil(calculatorsList.length / 8) }).map(
          (_, index) => (
            <div key={index} className="flex flex-col gap-8">
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {calculatorsList
                  .slice(index * 8, (index + 1) * 8)
                  .map((calculator) => (
                    <CalculatorCard
                      key={calculator._id}
                      calculatorDetail={calculator}
                    />
                  ))}
              </div>
              <div className="w-full mb-6">
                <AdBanner slot="1301479151" />
              </div>
            </div>
          ),
        )}
        {/* // calculatorsList.map((calculator, index) => (
        //   <div key={calculator._id}>
        //     <CalculatorCard calculatorDetail={calculator} />
        //     {index !== 0 && index % 8 == 0 && (
        //       <div className="w-full">
        //         <AdBanner slot="1301479151" />
        //       </div>
        //     )}
        //   </div>
        // ))} */}
      </div>
    </div>
  );
};

export default CalculatorsList;
