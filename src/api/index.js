
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

export const getHappifier = ({id}) => {
  return fields.map(field => {
    return {
      id: field,
      type: 'string',
      title: `Title of ${field}`,
      value: `Value of ${field} ${id}`,
      placeholder: `Placeholder of ${field}`
    }
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