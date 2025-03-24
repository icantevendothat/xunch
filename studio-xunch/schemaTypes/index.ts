import { defineField, defineType } from 'sanity'; 

export const projectType = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      options: { source: 'title' },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      title: 'Published At',
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      type: 'image',
      title: 'Image/GIF',
    }),
    defineField({
      name: 'caption',
      type: 'text',
      title: 'Caption',
    }),
    defineField({
      name: 'link',
      type: 'url',
      title: 'Link',
    }),
    defineField({
      name: 'category',
      type: 'string',
      title: 'Category',
      options: {
        list: [
          { title: 'Photo', value: 'photo' },
          { title: 'Design', value: 'design' },
          { title: 'DP', value: 'dp' },
          { title: 'Film', value: 'film' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
  ],
});

export const schemaTypes = [projectType]; 