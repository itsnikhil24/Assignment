import React from 'react';
import { Button } from '../components/ui/button';
import { Checkbox } from '../components/ui/checkbox';
import { ConsultMode, FeeRange } from '../types/doctor';

interface FilterSidebarProps {
  filters: {
    consultMode: ConsultMode[];
    experienceYears: number[];
    fees: FeeRange[];
    languages: string[];
  };
  onFilterChange: (filterType: string, value: any) => void;
  onClearFilters: () => void;
}

const FilterSidebar: React.FC<FilterSidebarProps> = ({
  filters,
  onFilterChange,
  onClearFilters,
}) => {
  const handleConsultModeChange = (mode: ConsultMode) => {
    const currentModes = [...(filters.consultMode || [])];
    if (currentModes.includes(mode)) {
      onFilterChange('consultMode', currentModes.filter((m) => m !== mode));
    } else {
      onFilterChange('consultMode', [...currentModes, mode]);
    }
  };

  const handleExperienceChange = (years: number) => {
    const currentYears = [...(filters.experienceYears || [])];
    if (currentYears.includes(years)) {
      onFilterChange('experienceYears', currentYears.filter((y) => y !== years));
    } else {
      onFilterChange('experienceYears', [...currentYears, years]);
    }
  };

  const handleFeesChange = (fee: FeeRange) => {
    const currentFees = [...(filters.fees || [])];
    if (currentFees.includes(fee)) {
      onFilterChange('fees', currentFees.filter((f) => f !== fee));
    } else {
      onFilterChange('fees', [...currentFees, fee]);
    }
  };

  const handleLanguageChange = (language: string) => {
    const currentLanguages = [...(filters.languages || [])];
    if (currentLanguages.includes(language)) {
      onFilterChange('languages', currentLanguages.filter((l) => l !== language));
    } else {
      onFilterChange('languages', [...currentLanguages, language]);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg border">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold">Filters</h2>
        <Button variant="link" className="text-primary p-0 h-auto" onClick={onClearFilters}>
          Clear All
        </Button>
      </div>

      {/* Location Button */}
      <div className="mb-6">
        <Button className="w-full justify-between" variant="outline">
          Show Doctors Near Me
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </Button>
      </div>

      {/* Mode of Consult */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Mode of Consult</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox
              id="hospital-visit"
              checked={filters.consultMode?.includes(ConsultMode.HOSPITAL) || false}
              onCheckedChange={() => handleConsultModeChange(ConsultMode.HOSPITAL)}
            />
            <label htmlFor="hospital-visit" className="ml-2 text-sm">
              Hospital Visit
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox
              id="online-consult"
              checked={filters.consultMode?.includes(ConsultMode.ONLINE) || false}
              onCheckedChange={() => handleConsultModeChange(ConsultMode.ONLINE)}
            />
            <label htmlFor="online-consult" className="ml-2 text-sm">
              Online Consult
            </label>
          </div>
        </div>
      </div>

      {/* Experience */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Experience (In Years)</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox
              id="exp-0-5"
              checked={filters.experienceYears?.includes(5) || false}
              onCheckedChange={() => handleExperienceChange(5)}
            />
            <label htmlFor="exp-0-5" className="ml-2 text-sm">
              0-5
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox
              id="exp-6-10"
              checked={filters.experienceYears?.includes(10) || false}
              onCheckedChange={() => handleExperienceChange(10)}
            />
            <label htmlFor="exp-6-10" className="ml-2 text-sm">
              6-10
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox
              id="exp-11-16"
              checked={filters.experienceYears?.includes(16) || false}
              onCheckedChange={() => handleExperienceChange(16)}
            />
            <label htmlFor="exp-11-16" className="ml-2 text-sm">
              11-16
            </label>
          </div>
        </div>
        <Button variant="link" className="text-primary p-0 h-auto text-sm mt-1">
          +1 More
        </Button>
      </div>

      {/* Fees */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Fees (In Rupees)</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox
              id="fee-100-500"
              checked={filters.fees?.includes(FeeRange.RANGE_100_500) || false}
              onCheckedChange={() => handleFeesChange(FeeRange.RANGE_100_500)}
            />
            <label htmlFor="fee-100-500" className="ml-2 text-sm">
              100-500
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox
              id="fee-500-1000"
              checked={filters.fees?.includes(FeeRange.RANGE_500_1000) || false}
              onCheckedChange={() => handleFeesChange(FeeRange.RANGE_500_1000)}
            />
            <label htmlFor="fee-500-1000" className="ml-2 text-sm">
              500-1000
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox
              id="fee-1000-plus"
              checked={filters.fees?.includes(FeeRange.RANGE_1000_PLUS) || false}
              onCheckedChange={() => handleFeesChange(FeeRange.RANGE_1000_PLUS)}
            />
            <label htmlFor="fee-1000-plus" className="ml-2 text-sm">
              1000+
            </label>
          </div>
        </div>
      </div>

      {/* Language */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-3">Language</h3>
        <div className="space-y-2">
          <div className="flex items-center">
            <Checkbox
              id="lang-english"
              checked={filters.languages?.includes('English') || false}
              onCheckedChange={() => handleLanguageChange('English')}
            />
            <label htmlFor="lang-english" className="ml-2 text-sm">
              English
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox
              id="lang-hindi"
              checked={filters.languages?.includes('Hindi') || false}
              onCheckedChange={() => handleLanguageChange('Hindi')}
            />
            <label htmlFor="lang-hindi" className="ml-2 text-sm">
              Hindi
            </label>
          </div>
          <div className="flex items-center">
            <Checkbox
              id="lang-telugu"
              checked={filters.languages?.includes('Telugu') || false}
              onCheckedChange={() => handleLanguageChange('Telugu')}
            />
            <label htmlFor="lang-telugu" className="ml-2 text-sm">
              Telugu
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;
