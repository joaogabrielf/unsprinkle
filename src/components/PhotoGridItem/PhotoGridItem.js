import React from "react";
import styled from "styled-components/macro";

const PhotoGridItem = ({ id, src, alt, tags }) => {
  const devicePixelRatio = [1, 2, 3];
  const updatedSrc = devicePixelRatio.map((ratio) =>
    src.replace(".jpg", `${ratio > 1 ? "@" + ratio + "x" : ""}.avif ${ratio}x`)
  );
  return (
    <article>
      <Anchor href={`/photos/${id}`}>
        <picture>
          <source srcSet={updatedSrc} type='image/avif' />
          <Image src={src} alt={alt} />
        </picture>
      </Anchor>
      <Tags>
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </Tags>
    </article>
  );
};

const Anchor = styled.a`
  text-decoration: none;
  color: inherit;
  outline-offset: 4px;
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: 300px;
  border-radius: 2px;
  margin-bottom: 8px;
  object-fit: cover;
`;

const Tags = styled.ul`
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  padding: 4px 0;
`;

const Tag = styled.li`
  display: inline;
  padding: 4px 8px;
  background: var(--color-gray-300);
  font-size: 0.875rem;
  font-weight: 475;
  color: var(--color-gray-800);

  &:not(:last-child) {
    margin-right: 8px;
  }
`;

export default PhotoGridItem;
