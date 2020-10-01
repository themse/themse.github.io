import React from 'react';
import { Icon, Stack, Box, Image, Heading, Text } from '@chakra-ui/core';

export const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="row">
          <div className="col-lg-4">
            <Box>
              <Image
                src="/img/avatar.jpg"
                alt="photo"
                rounded="full"
                objectFit="cover"
              />
            </Box>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <Box pb={3}>
              <Heading as="h3" size="lg" color="gray.600" mb={2}>
                NodeJS / JS Developer
              </Heading>
              <Text className="font-italic" mb={2}>
                May the force be with you
              </Text>
            </Box>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  <li>
                    <Stack isInline>
                      <Icon name="chevron-right" color="teal.300" size="24px" />
                      <span>
                        <strong>Name:</strong> Denis Polusmyak
                      </span>
                    </Stack>
                  </li>
                  <li>
                    <Stack isInline>
                      <Icon name="chevron-right" color="teal.300" size="24px" />
                      <span>
                        <strong>Birthday:</strong> 4 May 1992
                      </span>
                    </Stack>
                  </li>
                  <li>
                    <Stack isInline>
                      <Icon name="chevron-right" color="teal.300" size="24px" />
                      <span>
                        <strong>City:</strong> Kyiv, Ukraine
                      </span>
                    </Stack>
                  </li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  <li>
                    <Stack isInline>
                      <Icon name="chevron-right" color="teal.300" size="24px" />
                      <span>
                        <strong>Email:</strong>{' '}
                        <a href="mailto:den.polus.47@gmail.com">
                          den.polus.47@gmail.com
                        </a>
                      </span>
                    </Stack>
                  </li>
                  <li>
                    <Stack isInline>
                      <Icon name="chevron-right" color="teal.300" size="24px" />
                      <span>
                        <strong>Github:</strong>{' '}
                        <a target="_blank" href="https://github.com/themse">
                          themse
                        </a>
                      </span>
                    </Stack>
                  </li>
                </ul>
              </div>
            </div>
            <p className="d-none">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
              molestias reprehenderit, expedita provident quisquam pariatur
              distinctio ipsa libero dolores quae delectus iure perspiciatis
              rerum maiores commodi, illum laborum veniam? Id.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
