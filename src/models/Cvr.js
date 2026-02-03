
export function mapCvrFromApi(dto) {
    return {
        vat: dto.vat,
        status: dto.status,
        name: dto.name,
        address: dto.address,
        zipcode: dto.zipcode,
        city: dto.city,
        protected: dto.protected,
        phone: dto.phone,
        email: dto.email,
        fax: dto.fax,
        startdate: dto.startdate,
        enddate: dto.enddate,
        employees: dto.employees,
        industrycode: dto.industrycode,
        industrydesc: dto.industrydesc,
        companytype: dto.companytype,
        companydesc: dto.companydesc,
        owners: dto.owners
    }
}