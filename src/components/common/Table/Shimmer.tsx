import { Tr, Td } from "@chakra-ui/react";

interface Properties {
  headers: { id: string }[];
}

const Shimmer = ({ headers }: Properties) => {
  return (
    <Tr className="tablerow-loading-shimmer">
      {headers.map((header) => {
        return (
          <Td key={header.id}>
            <div className="shimmer"></div>
          </Td>
        );
      })}
    </Tr>
  );
};

export default Shimmer;
