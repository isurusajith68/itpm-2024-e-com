import { useEffect, useState } from "react";
import Layout from "../../../layout/Layout";
import { Button, Input, Select, SelectItem } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const formSchema = yup.object().shape({
  staff: yup.string().required(),
  basicSalary: yup.number().required(),
  allowances: yup.number().required(),
  ot: yup.number().required(),
});

const CalculateSalary = () => {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const res = await fetch("http://localhost:5000/auth");
        const data = await res.json();
        const staffList = data.users.filter((item) => item.role !== "user");
        setStaff(staffList);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStaff();
  }, []);

 
  

  return (
    <Layout>
      <div className="flex justify-center p-3 h-full items-center ">
        <div className="w-[600px] border-2 px-10 py-5 rounded-lg">
          <h1 className="text-lg ml-2 font-semibold text-gray-800">
            Calculate Salary
          </h1>
          <form className="mt-2 flex flex-col gap-2">
            <Select
              items={staff}
              label="Staff Member Name"
              placeholder="Select Staff Member"
              variant="filled"
              className="flex-1"
              //   errorMessage={errors.staff?.message}
              //   {...register("staff")}
              //   isInvalid={errors.staff}
            >
              {staff.map((item, index) => (
                <SelectItem key={index} value={item.username}>
                  {item.username}
                </SelectItem>
              ))}
            </Select>
            <Input
              label="Basic Salary"
              placeholder="Enter Basic Salary"
              variant="filled"
              type="number"
              //   errorMessage={errors.basicSalary?.message}
              //   {...register("basicSalary")}
              //   isInvalid={errors.basicSalary}
            />
            <Input
              label="Allowances"
              placeholder="Enter Allowances"
              variant="filled"
              type="number"
              //   errorMessage={errors.allowances?.message}
              //   {...register("allowances")}
              //   isInvalid={errors.allowances}
            />
            <div className="flex gap-2">
              <Input
                label="1 Hours Payment"
                placeholder="Enter 1 Hours Rate"
                variant="filled"
                type="number"
                value="180"
                disabled
                className=""
              />
              <Input
                label="OT Hours"
                placeholder="Enter OT Hours"
                variant="filled"
                type="number"
                //   errorMessage={errors.ot?.message}
                //   {...register("ot")}
                //   isInvalid={errors.ot}
              />
            </div>
            <Input
              label="Salary Payment"
              placeholder="Enter Salary"
              variant="filled"
              type="number"
              disabled
              value="0"
            />
            <div className="flex justify-end">
              <Button
                type="submit"
                size="large"
                className="bg-black text-white mt-2"
                loading={isSubmitting}
              >
                {"Pay"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default CalculateSalary;
