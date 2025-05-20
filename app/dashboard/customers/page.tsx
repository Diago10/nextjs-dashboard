import { Metadata } from 'next';
import Table from '@/app/ui/customers/table';
import { lusitana } from '@/app/ui/font';
import { Suspense } from 'react';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { InvoiceSkeleton } from '@/app/ui/skeletons';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page() {
  const query = ''; // Define the query or receive it as a prop
  const customers = await fetchFilteredCustomers(query);

  return (
    <>
      <Suspense fallback={<InvoiceSkeleton />}>
        <Table customers={customers} />
      </Suspense>
    </>
  );
}
