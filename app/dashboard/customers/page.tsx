import { Metadata } from 'next';
import Table from '@/app/ui/customers/table';
import { Suspense } from 'react';
import { fetchFilteredCustomers } from '@/app/lib/data';
import { InvoiceSkeleton } from '@/app/ui/skeletons';

export const metadata: Metadata = {
  title: 'Customers',
};

export default async function Page(
  props: {
    searchParams?: Promise<{
      query?: string;}>
    }
) {
  const searchParams  = await props.searchParams;
  const query = searchParams?.query || '';
  const customers = await fetchFilteredCustomers(query);

  return (
    <>
      <Suspense fallback={<InvoiceSkeleton />}>
        <Table customers={customers} />
      </Suspense>
    </>
  );
}
