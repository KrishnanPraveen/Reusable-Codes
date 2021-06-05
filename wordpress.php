<!----------------------
    Custom Field Value
------------------------>
<?php the_field('hero_sub_heading'); ?>

<!---------------------------
    Custom Field Image Value
----------------------------->
<?php $con_img = get_field('contributor_image'); ?>
<img src="<?php echo $con_img['url'];?>" alt="<?php echo $con_img['alt'];?>">

<!-------------------------
    Getting Post Type Items
--------------------------->
<?php
    $wp_logos       = new WP_Query([
        'post_type' => 'client_logos',
        'posts_per_page' => '-1',
        'orderby' => 'meta_value_num',
        'meta_key' => 'position',
        'order' => 'ASC'
    ]);
    $clientlogos    = $wp_logos->posts;
?>
<?php
   foreach ($clientlogos as $logo) {
?>
    <div class="col-xs-6 col-sm-3 col-lg-2">
        <img src="<?php echo get_the_post_thumbnail_url($logo->ID, 'full'); ?>" alt="<?php echo $logo->post_title; ?>"/>
    </div>
<?php } wp_reset_postdata(); ?>

<!---------------------------------
    Custom Field Post Object Value
----------------------------------->
<?php 
    $ebookBlog = get_field('ebook_&_blog'); 
    foreach($ebookBlog as $ebookBlog) {  
        $post_id =  $ebookBlog->ID; 
?>
   <div class="col-xs-12 col-sm-6 col-md-4 recent-ebook-container">
        <h3 class="text-white"><?php echo get_the_title($post_id); ?></h3>                          				
   </div> 
<?php  } ?>

<!--------------------------------
    Custom Field True/False Value
---------------------------------->
<?php
   $blackSite = get_field_object('black_site');
   $blackFieldClass = (!empty($blackSite['value'])) ? 'black-wrapper' : 'white-wrapper';
?>

<!-------------------------------------------
    Custom Field Value have value then show
-------------------------------------------->
<?php 
   $idPixl = get_the_ID(); 
   if($idPixl == "1577"): ?>
   <script>
      gtag('event', 'conversion', {'send_to': 'AW-971931796/UTWuCJ75zZICEJSBus8D'});
      gtag('config', 'AW-971931796');
   </script>
<?php endif; ?>