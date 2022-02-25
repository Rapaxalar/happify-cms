
const fields = [
  'happifier_type',
  'human_url',
  'created_at',
  'modified_at',
  'video_url_translations',
  'is_promoted',
  'id_featured',
  'author_translations',
  'title_translations',
  'subtitle_translations',
  'meta_title_translations',
  'meta_description_translations',
  'image_translations',
  'right_rail_image_translations',
  'image_alt_translations',
  'body_translations',
  'credits_translations',
  'og_title_translations',
  'og_description_translations',
  'og_image_translations',
  'publish_at_translations',
  'is_enabled',
  'view_count',
  'viral_coeff',
  'promo_factor',
  'serenity_scene',
  'serenity_guide',
  'serenity_time',
  'hog_scene',
  'available_locales',
  'generic_helped_association_id',
  'generic_comment_association_id',
  'generic_like_association_id',
  'is_sponsored',
  'author_image_translations',
  'author_info_translations',
  'sponsor',
  'audio_url_translations',
  'publisher_id',
  'original_image_translations',
  'image_click_url_translations',
  'image_id',
  'right_rail_image_id',
  'og_image_id',
]

const randomInput = (field, id) => {
  return [
    {
      id: field,
      type: 'text',
      label: `Label of ${field}`,
      value: `Value of ${field} ${id}`,
      placeholder: `Placeholder of ${field}`,
      multiline: Boolean(Math.round(Math.random())),
    },
    {
      id: field,
      type: 'switch',
      label: `Label of ${field}`,
      value: Boolean(Math.round(Math.random())),
    },
    {
      id: field,
      type: 'checkbox',
      label: `Label of ${field}`,
      value: Boolean(Math.round(Math.random())),
    },
    {
      id: field,
      type: 'radio',
      label: `Label of ${field}`,
      value: 'opt1',
      options: [
        {
          label: `Label of ${field} option 1`,
          value: 'opt1',
        },
        {
          label: `Label of ${field} option 2`,
          value: 'opt2',
        },
        {
          label: `Label of ${field} option 3`,
          value: 'opt3',
        },
      ]
    },
    {
      id: field,
      type: 'select',
      label: `Label of ${field}`,
      value: 'opt1',
      options: [
        {
          label: `Label of ${field} option 1`,
          value: 'opt1',
        },
        {
          label: `Label of ${field} option 2`,
          value: 'opt2',
        },
        {
          label: `Label of ${field} option 3`,
          value: 'opt3',
        },
      ]
    }
  ][Math.floor(Math.random()*5)]
}

export const getHappifier = ({id}) => {
  return fields.map(field => {
    return randomInput(field, id)
  })
}

export const getHappifiersList = () => {
  const response = [];
  for (let i = 0; i < 42; i++) {
    response.push({
      id: i,
      title: `title ${i}`,
      author: `author ${i}`,
    })
  }
  return response;
}