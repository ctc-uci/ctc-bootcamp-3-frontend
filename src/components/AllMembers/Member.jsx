import {
  Card,
  Text,
  Heading,
  Stack,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  ButtonGroup,
  Button,
  Image,
} from '@chakra-ui/react';
import delightChicken from './delightChicken.jpg';
import AISS from './AISS.jpg';
import FPH from './FPH.jpg';
import S2T from './S2T.jpg';
const Member = ({ name, memberYear, project }) => {
  let imagesrc;
  if (project === 'S2T') {
    imagesrc = S2T;
  } else if (project === '(Board)') {
    imagesrc = delightChicken;
  } else if (project === 'FPH') {
    imagesrc = FPH;
  } else if (project === 'AISS') {
    imagesrc = AISS;
  }
  return (
    <Card maxW="sm" m={5}>
      <CardBody>
        <Image src={imagesrc} alt="Cool pic" borderRadius="lg" />

        <Stack mt="6" spacing="3">
          <Heading size="md">{name}</Heading>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Text>
          {memberYear} year on {project}
        </Text>
      </CardFooter>
    </Card>
  );
};

export default Member;
