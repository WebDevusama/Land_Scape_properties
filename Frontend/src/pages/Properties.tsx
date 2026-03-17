import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/ui/Navbar";
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from "@/components/ui/card";


export default function Properties() {
  return (
    <section className="space-y-6 p-6">
    <Navbar/>

      <Card />
      <CardContent/>
      <CardHeader>
        <CardTitle>Property Title</CardTitle>
        <CardDescription>Brief description of the property.</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button type="button">Edit</Button>
        <Button type="button" variant="outline">Delete</Button>
      </CardFooter>
      
    

      <Alert>
        <AlertTitle>Properties</AlertTitle>
        <AlertDescription>Browse and manage your listed properties.</AlertDescription>
      </Alert>

      <Accordion type="single" collapsible>
        <AccordionItem value="overview">
          <AccordionTrigger>Overview</AccordionTrigger>
          <AccordionContent>
            Property details and status will appear here.
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button type="button">Add Property</Button>
    </section>
  );
}
