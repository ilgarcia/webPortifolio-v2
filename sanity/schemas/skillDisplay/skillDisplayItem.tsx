import {
  ObjectItemProps,
  PatchEvent,
  Reference,
  set,
  useFormValue,
} from "sanity";
import { Box, Flex, Switch } from "@sanity/ui";
import { useDocumentPane } from "sanity/desk";
import { useCallback } from "react";
// import { skillDisplayType } from './skillDisplayType

type SkillDisplay = {
  _key: string;
  skill?: Reference;
  featured?: boolean;
};

export function SkillDisplayItem(props: ObjectItemProps<SkillDisplay>) {
  const { value, path } = props;

  const { onChange } = useDocumentPane();

  const handleClick = useCallback(() => {
    const nextValue = value?.featured ? false : true;
    const clickedFeaturedPath = [...path, "featured"];

    onChange(
      PatchEvent.from([
        set(nextValue, clickedFeaturedPath),
      ])
    );
  }, [value?.featured, path, onChange]);

  return (
    <Flex gap={3} paddingRight={2} align="center">
      <Box flex={1}>{props.renderDefault(props)}</Box>
      <Switch checked={value?.featured} onClick={handleClick} />
    </Flex>
  );
}
