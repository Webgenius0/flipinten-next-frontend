"use client";

import { Filter } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { filterOptions } from "@/data/filterOptions";
import { useRouter, useSearchParams } from "next/navigation";

const CaseStudiesFilters = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  console.log(searchParams);
  // handle select change
  const handleParamsChange = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    router.push(`/resources/case-studies?${params.toString()}`);
  };

  return (
    <div className="flex flex-wrap items-center gap-6 px-12 py-6 bg-neutral rounded-[12px] max-w-max mx-auto">
      {/* Filter Header */}
      <div className="flex items-center gap-2">
        <Filter size={24} />
        <p className="text-neutral-400 text-2xl font-medium">Filter</p>
      </div>

      {/* Dynamic Selects */}
      {filterOptions.map((filter) => (
        <Select
          key={filter.label}
          onValueChange={(value) =>
            handleParamsChange(filter.label.toLowerCase(), value)
          }
          defaultValue={searchParams.get(filter.label) || "all"}
        >
          <SelectTrigger>
            <SelectValue placeholder={filter.placeholder} />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>{filter.label}</SelectLabel>
              {filter.options.map((opt) => (
                <SelectItem key={opt.value} value={opt.value}>
                  {opt.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      ))}
    </div>
  );
};

export default CaseStudiesFilters;
