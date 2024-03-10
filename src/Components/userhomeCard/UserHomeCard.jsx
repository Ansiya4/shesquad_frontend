import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
 
export function UserHomeCard({data}) {
  return (
    <Card className="mt-6 w-80">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={data.cat_image}
          alt="card-image"
        />
      </CardHeader>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          {data.cat_name}
        </Typography>
        <Typography>
          {data.cat_description}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">
        <Button>View Expert</Button>
      </CardFooter>
    </Card>
  );
}